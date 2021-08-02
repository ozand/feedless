import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { debounce, DebouncedFunc, isUndefined, flatten } from 'lodash';
import { ModalController } from '@ionic/angular';
import { SubscriptionService } from '../../services/subscription.service';
import {
  GqlBucket,
  GqlProxyFeeds,
  GqlNativeFeedRef,
  GqlSubscription,
  GqlProxyFeed,
  FieldWrapper,
} from '../../../generated/graphql';
import { FeedComponent } from '../feed/feed.component';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-add-subscription',
  templateUrl: './add-subscription.component.html',
  styleUrls: ['./add-subscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddSubscriptionComponent implements OnInit {
  @Input()
  subscription: GqlSubscription | null;
  @Input()
  bucket: GqlBucket;

  queryString: string;
  private searchDebounced: DebouncedFunc<any>;
  loading: boolean;
  editMode: boolean;
  tags: string = '';
  resolvedNativeFeeds: GqlNativeFeedRef[];
  resolvedGeneratedFeeds: GqlProxyFeeds;
  throttle: string = '';
  title: string = '';

  constructor(
    private readonly modalController: ModalController,
    private readonly ref: ChangeDetectorRef,
    private readonly subscriptionService: SubscriptionService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly toastService: ToastService
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.tags = this.subscription?.tags;
    this.editMode = !isUndefined(this.subscription);
    this.searchDebounced = debounce(this.search.bind(this), 300);
    this.queryString = this.subscription?.feed?.feed_url;
    this.changeDetectorRef.detectChanges();
  }

  dismissModal(type: string) {
    return this.modalController.dismiss(type);
  }

  search(query: string) {
    if (this.editMode) {
      return;
    }
    if (query.trim().length < 3) {
      return;
    }
    this.loading = true;

    Promise.all([
      this.subscriptionService
        .discoverFeedsByUrl(query)
        .toPromise()
        .then(({ data }) => data.discoverFeedsByUrl)
        .catch(() => []),
      this.subscriptionService
        .searchFeeds(query)
        .toPromise()
        .then(({ data }) => data.feeds)
        .catch(() => []),
    ])
      .then((data) => {
        this.resolvedNativeFeeds = flatten([
          ...data[0].nativeFeeds,
          ...data[1],
        ]);
        this.resolvedGeneratedFeeds = data[0].generatedFeeds;
      })
      .finally(() => {
        this.loading = false;
        this.ref.detectChanges();
      });
  }

  updateSubscription() {
    this.subscriptionService
      .updateSubscription(this.subscription, this.tags.split(','))
      .subscribe(({ data, errors }) => {
        if (errors) {
          this.toastService.errors(errors);
        } else {
          this.toastService.info('Saved');
          return this.dismissModal('update');
        }
      });
  }

  async showNativeFeed(feed: GqlNativeFeedRef) {
    const modal = await this.modalController.create({
      component: FeedComponent,
      componentProps: {
        feed,
        canSubscribe: true,
      },
    });
    modal.onDidDismiss<GqlNativeFeedRef>().then((response) => {
      console.log('chose feed', response.data);
      if (response.data) {
        this.subscriptionService
          .createSubscription(response.data.feed_url, this.bucket.id)
          .toPromise()
          .then(({ data, errors }) => {
            if (errors) {
              this.toastService.errors(errors);
            } else {
              this.toastService.info('Subscribed');

              this.subscriptionService
                .findById(data.subscribeToFeed.id)
                .toPromise()
                .then(({ data }) => {
                  this.subscription = data.subscription;
                  this.resolvedNativeFeeds = [];
                  this.refresh();
                });
            }
          });
      }
    });

    await modal.present();
  }

  isChosenFeed(feed: GqlNativeFeedRef) {
    return false;
  }

  unsubscribe() {
    this.subscriptionService
      .unsubscribe(this.subscription.id)
      .subscribe(({ data, errors }) => {
        if (errors) {
          this.toastService.errors(errors);
        } else {
          this.toastService.info('Unsubscribed');
        }
        this.dismissModal('unsubscribe');
      });
  }

  getHomepageUrl() {
    return this.subscription?.feed?.home_page_url;
  }

  preview() {}

  showRssProxyFeeds(generatedFeed: GqlProxyFeeds) {}
}
