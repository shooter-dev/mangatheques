import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entities/user.entity';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // apiUrl = 'http://nas.shooterdev.fr:3000/api/mangatheques/v1/';

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage,
    private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  login(user: User) {
    console.log(user);
    // const r = this.http.get(this.apiUrl + 'login');
    // console.log(r);

    return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
      this.authenticationState.next(true);
    });
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    //console.log(this.authenticationState.value);
    return this.authenticationState.value;
  }

}
