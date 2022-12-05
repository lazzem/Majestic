import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDiffusionComponent } from './add-diffusion/add-diffusion.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UdateDiffusionComponent } from './udate-diffusion/udate-diffusion.component';

const routes: Routes = [  
  { path: 'list', component: ListComponent },
{ path: 'add', component: AddComponent },
{ path: 'diffadd/:id', component: AddDiffusionComponent },
{ path: 'diffupdate/:id', component: UdateDiffusionComponent },
{ path: 'details/:id', component: DetailsComponent },
{ path: 'update/:id', component: AddComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
