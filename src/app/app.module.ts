import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './Component/Profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { UserDialogComponent } from './Component/Profile/userDialog/user-dialog/user-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavBarComponent } from './Component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DashboardComponent,
    UserDialogComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
