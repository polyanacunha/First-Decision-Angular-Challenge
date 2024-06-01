import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AddUserDialogComponent } from '../users/add-user-dialog/add-user-dialog.component';

@Component({
  selector: 'app-confirm-close-dialog',
  templateUrl: './confirm-close-dialog.component.html',
  styleUrls: ['./confirm-close-dialog.component.scss']
})
export class ConfirmCloseDialogComponent {
  constructor(private dialogRef: MatDialogRef<ConfirmCloseDialogComponent>) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }
}
