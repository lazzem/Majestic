import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { SidemenuComponent } from './components/admin/sidemenu/sidemenu.component';
import { SalesStatisticsComponent } from './components/sales-statistics/sales-statistics.component';
import { TodayStatisticsComponent } from './components/today-statistics/today-statistics.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    SalesStatisticsComponent,
    TodayStatisticsComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
