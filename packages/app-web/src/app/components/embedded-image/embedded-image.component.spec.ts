import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmbeddedImageComponent } from './embedded-image.component';
import { EmbeddedImageModule } from './embedded-image.module';
import { AppTestModule } from '../../app-test.module';

describe('EmbededWebsiteComponent', () => {
  let component: EmbeddedImageComponent;
  let fixture: ComponentFixture<EmbeddedImageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EmbeddedImageModule, AppTestModule.withDefaults()],
    }).compileComponents();

    fixture = TestBed.createComponent(EmbeddedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});