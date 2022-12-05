import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

 // { path:'', redirectTo:'users' , pathMatch:'full' },

  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },

 { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) }
  //{ path:'home', component:HomeComponent }, 
  //{ path: 'users', loadChildren: () => import('./admin/users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
