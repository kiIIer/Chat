import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  constructor(public auth: AuthService) { }

  async signInWithGoogle() {
    await this.auth.googleLogin();
  }

  async signInWithFacebook() {
    await this.auth.facebookLogin();
  }

  signOut() {
    this.auth.signOut();
  }
}
