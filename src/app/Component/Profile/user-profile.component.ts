import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './userDialog/user-dialog/user-dialog.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private matdialog:MatDialog){

  }

  viewDetails(str:any):void{
    const dialogRef = this.matdialog.open(UserDialogComponent,{
      width:'400px',
      data:{message:str}
    });

    dialogRef.afterClosed().subscribe(result =>{

    });
  }

}
