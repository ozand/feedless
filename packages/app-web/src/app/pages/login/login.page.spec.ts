import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginPage } from './login.page';
import { LoginPageModule } from './login.module';
import {
  ApolloMockController,
  AppTestModule,
  mockServerSettings,
} from '../../app-test.module';
import { RouterTestingModule } from '@angular/router/testing';
import {
  Config,
  ServerSettingsService,
} from '../../services/server-settings.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ApolloClient } from '@apollo/client/core';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginPageModule,
        AppTestModule.withDefaults(),
        RouterTestingModule.withRoutes([]),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    await mockServerSettings(
      TestBed.inject(ApolloMockController),
      TestBed.inject(ServerSettingsService),
      TestBed.inject(ApolloClient),
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
