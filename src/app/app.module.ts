import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header/app-header.component';
import { AppFilterComponent } from './filter/app-filter/app-filter.component';
import { AppFooterComponent } from './footer/app-footer/app-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFilterComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
