import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './Component/Profile/user-profile.component';
import { DashboardComponent } from './Component/Dashboard/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { MatDialog } from '@angular/material/dialog';

const routes: Routes = [
  { path: '', component: DashboardComponent  },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
