import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDiffusionComponent } from './add-diffusion/add-diffusion.component';
import { UdateDiffusionComponent } from './udate-diffusion/udate-diffusion.component';


@NgModule({
  declarations: [
    EventsComponent,
    ListComponent,
    AddComponent,
    DetailsComponent,
    AddDiffusionComponent,
    UdateDiffusionComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
