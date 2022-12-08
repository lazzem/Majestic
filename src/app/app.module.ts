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
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SalesStatisticsComponent,
    TodayStatisticsComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  exports : [
    CommonModule, 
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
