import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { CompleteOrdersComponent } from './complete-orders/complete-orders.component';
import { CanceledOrdersComponent } from './canceled-orders/canceled-orders.component';
import { FutureOrdersComponent } from './future-orders/future-orders.component';
import { AdminTopNavComponent } from './admin-top-nav/admin-top-nav.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProfileComponent } from './profile/profile.component';
import { AssignedOrdersComponent } from './assigned-orders/assigned-orders.component';
import { ProfileEditModalComponent } from './profile/profile-edit-modal/profile-edit-modal.component';
import { AdminViewportComponent } from './admin-viewport/admin-viewport.component';

export const routes: Routes = [
  //{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AdminViewportComponent,
  children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: AdminDashboardComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'pending-orders', component: PendingOrdersComponent },
    { path: 'complete-orders', component: CompleteOrdersComponent },
    { path: 'canceled-orders', component: CanceledOrdersComponent },
    { path: 'future-orders', component: FutureOrdersComponent },
    { path: 'assigned-orders', component: AssignedOrdersComponent },
    { path: 'order-history', component: OrderHistoryComponent }
  ]
  }
];


@NgModule({
  declarations: [ 
      PendingOrdersComponent,
      CompleteOrdersComponent, 
      CanceledOrdersComponent,
      FutureOrdersComponent,
      OrderHistoryComponent,
      ProfileComponent,
      AssignedOrdersComponent,
      AdminViewportComponent,
      AdminSideNavComponent,
      AdminTopNavComponent
      //ProfileEditModalComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    // ProfileEditModalComponent
  ],
})
export class AdminModule { }
