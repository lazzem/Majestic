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
import { HeaderComponent } from '../components/admin/header/header.component';
import { SidemenuComponent } from '../components/admin/sidemenu/sidemenu.component';
import { AppModule } from '../app.module';
import { HeaderModule } from '../components/admin/header/header.module';
import { SidemenuModule } from '../components/admin/sidemenu/sidemenu.module';


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
    ReactiveFormsModule,
    HeaderModule,
    SidemenuModule
  ]
})
export class EventsModule { }
