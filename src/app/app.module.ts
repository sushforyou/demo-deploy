import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/app-header/app-header.component';
import { AppFilterComponent } from './filter/app-filter/app-filter.component';
import { AppFooterComponent } from './footer/app-footer/app-footer.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFilterComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
