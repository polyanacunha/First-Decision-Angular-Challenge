import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmCloseDialogComponent } from 'src/app/confirm-close-dialog/confirm-close-dialog.component';

interface Profile {
  name: string;
  id: number;
}

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {
  userForm!: FormGroup;
  currentMask = '';
  profilesControl = new FormControl<Profile[]>([]);
    profiles: Profile[] = [
    { name: 'Supervisor', id: 1 },
    { name: 'Analista', id: 2 },
  ];
  countries = [
    { name: 'Brasil', code: 'BR', mask: '+55 (00) 00000-0000'},
    { name: 'United States', code: 'US' , mask: '+7 (000) 000-00-00'},
    { name: 'United Kingdom', code: 'GB', mask: '+1 (000) 000-0000'}
  ];
  selectedCountryCode = 'BR';
  phoneNumber = '';

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private dialog: MatDialog, private dialogRef: MatDialogRef<AddUserDialogComponent>) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      country: [''],
    });
    this.userForm.get('country')!.valueChanges.subscribe(country => {
      const selectedCountry = this.countries.find(c => c.code === country);
      this.currentMask = selectedCountry ? selectedCountry.mask : '';
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form data', this.userForm.value);
    }
  }
  sendInvite() {
    this.snackBar.open('Convite enviado com sucesso!', 'Fechar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  closeDialog(): void {
    const dialogRef = this.dialog.open(ConfirmCloseDialogComponent, {
      width: '250px'      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.dialogRef.close();
        }
      });
  }
}
