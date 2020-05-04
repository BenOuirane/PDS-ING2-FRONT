import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-confirmation',
  templateUrl: './popup-confirmation.component.html',
  styleUrls: ['./popup-confirmation.component.scss']
})
export class PopupConfirmationComponent {

  constructor(
    public dialogRef : MatDialogRef<PopupConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }

  }


