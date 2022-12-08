import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [

  //{ path:'', redirectTo:'users' , pathMatch:'full' , canActivate:[AuthGuard]},

  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), canActivate:[AuthGuard] },

 { path: 'events', loadChildren: () => import('./events/events.module').then(m => m.EventsModule) , canActivate:[AuthGuard]},

 { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
  //{ path:'home', component:HomeComponent }, 
  //{ path: 'users', loadChildren: () => import('./admin/users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
