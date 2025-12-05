import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { IfDirective } from '../shared/if.directive'; // <-- added
<<<<<<< HEAD
=======
import { LoginService } from '../services/login.service';
>>>>>>> a4967df7d97fc81d48c9e46476c153ada1a90259

@Component({
  selector: 'login',
  imports: [ 
     CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    IfDirective
  ],
<<<<<<< HEAD
=======
  standalone: true,
>>>>>>> a4967df7d97fc81d48c9e46476c153ada1a90259
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
<<<<<<< HEAD
    private formBuilder: FormBuilder
=======
    private formBuilder: FormBuilder,
    private loginService: LoginService
>>>>>>> a4967df7d97fc81d48c9e46476c153ada1a90259
  ) {
    this.loginForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  generateOtp(): void {
<<<<<<< HEAD
    debugger;
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';

    if (this.loginForm.invalid) {
      return;
    }else {
      this.successMessage = 'OTP has been sent to your email.';
    }

    this.loading = true;
    
=======
    this.submitted = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.loading = true;
    if (this.loginForm.invalid) {
      return;
    }else {
      this.loginService.generateOtp(this.email?.value).subscribe(
        (response) => {
          this.successMessage = 'OTP has been sent to your email.';
       
          this.loading = false;
        },
        (error) => {
          this.errorMessage = 'Failed to send OTP. Please try again.';
             if(error.error && error.error.errors && error.error.errors.length > 0) {
            this.errorMessage = error.error.errors[0];
          }
          this.loading = false;
        }
      );
    }

>>>>>>> a4967df7d97fc81d48c9e46476c153ada1a90259
  }
}