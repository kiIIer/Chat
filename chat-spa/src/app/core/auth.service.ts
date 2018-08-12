import { Injectable } from '@angular/core';
import { User } from './user';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User | null>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
    this.user.subscribe(user => console.log(user));
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provier = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provier);
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => credential.user)
      .catch(error => this.handleError(error));
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  private handleError(error: Error) {
    console.error(error);
  }
}
