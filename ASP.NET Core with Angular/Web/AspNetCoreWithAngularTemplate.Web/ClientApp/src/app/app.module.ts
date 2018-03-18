import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//// import { AppComponent } from './app.component';
//import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
//import { HomeComponent } from './components/home/home.component';
//import { CounterComponent } from './components/counter/counter.component';
//import { FetchDataComponent } from './components/fetch-data/fetch-data.component';


import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app.routes';

import { APP_SERVICES, AuthInterceptorService, AuthErrorsInterceptorService } from './services/index';

import { APP_COMPONENTS, AppComponent } from './components/index';

import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    APP_COMPONENTS
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    SharedModule,

    AppRoutingModule
   
  ],
  providers: [APP_SERVICES,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthErrorsInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
