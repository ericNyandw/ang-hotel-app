import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {provideHttpClient} from '@angular/common/http';
import {NgOptimizedImage} from '@angular/common';

import { HotelList } from './hotels/hotel-list/hotel-list';


@NgModule({
  declarations: [
    App,
    HotelList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgOptimizedImage,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideHttpClient(),
  ],
  bootstrap: [App]
})
export class AppModule { }
