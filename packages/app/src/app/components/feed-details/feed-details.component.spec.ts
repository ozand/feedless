import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeedDetailsComponent } from './feed-details.component';
import { FeedDetailsModule } from './feed-details.module';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('FeedDetailsComponent', () => {
  let component: FeedDetailsComponent;
  let fixture: ComponentFixture<FeedDetailsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FeedDetailsModule, ApolloTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(FeedDetailsComponent);
      component = fixture.componentInstance;
      component.feed = {} as any;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});