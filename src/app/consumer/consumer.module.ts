import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { ConsumerViewportComponent } from './consumer-viewport/consumer-viewport.component';
import { ConsumerDashboardComponent } from './consumer-dashboard/consumer-dashboard.component';
import { ConsumerTopNavComponent } from './consumer-top-nav/consumer-top-nav.component';
import { ConsumerSideNavComponent } from './consumer-side-nav/consumer-side-nav.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyAddressesComponent } from './my-addresses/my-addresses.component';
import { OrderStatisticsComponent } from './order-statistics/order-statistics.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {path:'', component:ConsumerViewportComponent,
  children:[
    { path: '', redirectTo: 'neworder', pathMatch: 'full'},
    { path: 'neworder', component: ConsumerDashboardComponent},
    { path: 'myorders', component: MyOrdersComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'myaddresses', component: MyAddressesComponent},
    { path: 'order-statistics', component: OrderStatisticsComponent},
    { path: 'contact-us', component: ContactUsComponent}
  ]
}
];

@NgModule({
  declarations: [ConsumerViewportComponent, ConsumerDashboardComponent, ConsumerTopNavComponent, ConsumerSideNavComponent, MyOrdersComponent, MyAddressesComponent, OrderStatisticsComponent, ContactUsComponent, ProfileComponent],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0'
    }), 
    RouterModule.forChild(routes)
  ]
})
export class ConsumerModule { }
