import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ApolloClient } from '@apollo/client/core';
import { ModalController } from '@ionic/angular';
import { BucketCreatePage } from '../bucket-create/bucket-create.page';
import {
  GqlSearchBucketsQuery,
  GqlSearchBucketsQueryVariables,
  SearchBuckets,
} from '../../../generated/graphql';
import { ModalDismissal } from '../../app.module';
import { Pagination } from '../../services/pagination.service';
import { BasicBucket } from '../../services/bucket.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage implements OnInit {
  pagination: Pagination;
  matches: Array<BasicBucket>;
  loading = false;
  query = '';
  constructor(
    private readonly apollo: ApolloClient<any>,
    private readonly modalCtrl: ModalController,
    private readonly changeRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.handleChange();
  }

  handleChange() {
    if (this.loading) {
      return;
    }
    this.loading = true;
    this.apollo
      .query<GqlSearchBucketsQuery, GqlSearchBucketsQueryVariables>({
        query: SearchBuckets,
        variables: {
          data: {
            page: 0,
            where: {
              query: this.query,
            },
          },
        },
      })
      .then((response) => {
        const search = response.data.buckets;
        this.matches = search.buckets;
        this.pagination = search.pagination;
      })
      .finally(() => {
        this.loading = false;
        this.changeRef.detectChanges();
      });
  }

  toDate(createdAt: number): Date {
    return new Date(createdAt);
  }

  async showCreateBucketModal() {
    const modal = await this.modalCtrl.create({
      component: BucketCreatePage,
    });
    await modal.present();
    await modal.onDidDismiss<ModalDismissal>();
  }
}
