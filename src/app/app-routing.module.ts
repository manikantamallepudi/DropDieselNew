import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuardService as AuthGuard  } from './auth/authguard.service';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  //  {path: '', redirectTo: 'login', pathMatch: 'full'},
   { path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), canActivate: [AuthGuard]},
  // { path: 'login', component: LoginComponent, canActivate: [AuthGuard]}
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard]},
   { path: 'consumer', loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule), canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
