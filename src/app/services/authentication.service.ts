import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entities/user.entity';
import { ApiMangathequesService } from './api-mangatheques.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // apiUrl = 'http://nas.shooterdev.fr:3000/api/mangatheques/v1/';

  authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage,
    private plt: Platform,
    private api: ApiMangathequesService) {
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
    this.api.setApiPost('/login', user).subscribe((data) => {
      this.storage.set('utilisateur', data.user);
      return this.storage.set(TOKEN_KEY, data.token).then(() => {
        this.authenticationState.next(data.auth);
      });
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
