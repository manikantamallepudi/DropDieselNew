import { AuthGuardService } from './auth/authguard.service';
import { ProfileEditModalComponent } from './admin/profile/profile-edit-modal/profile-edit-modal.component';
import { AdminTopNavComponent } from './admin/admin-top-nav/admin-top-nav.component';
import { AdminSideNavComponent } from './admin/admin-side-nav/admin-side-nav.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    // AdminSideNavComponent,
    // AdminTopNavComponent
  ],
  imports: [
    BrowserModule,
    // AdminModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents: [
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
