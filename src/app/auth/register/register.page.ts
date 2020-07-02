import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public form = {
    email: null,
    password: null,
    confirmPassword: null
  };
  constructor(
    public loadingController: LoadingController,
    private router: Router,
    private authService: AuthService,
    private common: CommonService
  ) { }

  ngOnInit() {
  }

  singUp() {
    this.common.loadingPresent('please wait....');
    this.authService.signup(this.form.email, this.form.password).then(
      (userData) => {
      this.common.loadingDismiss();
      console.log('user data is; ', userData);
      this.common.toastShow('Sucessfully Created account', 'success');
      }).catch((error) =>
      {
        this.common.loadingDismiss();
        this.common.toastShow(error.message, 'danger');
      });
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
