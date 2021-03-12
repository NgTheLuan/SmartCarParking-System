import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../service/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authService: any;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  loginWithFirebase() {
    // alert("Chào FB");
    let email = this.loginForm.controls['email'].value;
    let password = this.loginForm.controls['password'].value;
    this.auth.loginFirebase(email, password).then((res) => {
      console.log('Đăng Nhập Thành Công !');
      location.href = '/home';
    });
  }

  onSubmit() { }


}
