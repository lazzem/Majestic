import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../components/admin/header/header.component';
import { SidemenuComponent } from '../components/admin/sidemenu/sidemenu.component';
import { AppModule } from '../app.module';
import { HeaderModule } from '../components/admin/header/header.module';
import { SidemenuModule } from '../components/admin/sidemenu/sidemenu.module';


@NgModule({
  declarations: [
    UsersComponent,
    ListComponent,
    AddComponent,
    DetailsComponent

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    SidemenuModule
  ]
})
export class UsersModule { }
