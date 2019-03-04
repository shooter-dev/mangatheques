import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/entities/user.entity';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: FormGroup;
  private user: User;
  constructor(private authService: AuthenticationService, private formBuilder: FormBuilder) {
    this.userLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.user = new User();
  }

  ngOnInit() {
  }

  login() {
    this.user.email = this.userLogin.value.email;
    this.user.password = this.userLogin.value.password;
    this.authService.login(this.user);
  }

}
