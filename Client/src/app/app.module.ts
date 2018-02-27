import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from './@theme/theme.module'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

import {NbEmailPassAuthProvider, NbAuthModule, NbAuthService} from './auth';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    AppRoutingModule,
    NbAuthModule.forRoot({
      providers: {
        email: {
          service: NbEmailPassAuthProvider,
          config: {
            baseEndpoint: 'http://localhost:3000/'
          },
        },
      },
      forms:  {
        login: {
          redirectDelay: 0,
        },
        register: {
          redirectDelay: 0,
        },
        requestPassword: {
          redirectDelay: 0,
        },
        resetPassword: {
          redirectDelay: 0,
        },
        logout: {
          redirectDelay: 0,
        },
      },
    })
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, NbAuthService]
})
export class AppModule {}
