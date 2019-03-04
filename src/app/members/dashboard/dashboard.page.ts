import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { User } from 'src/app/entities/user.entity';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public utilisateur: User;
  constructor(
    private storage: Storage,
    private authService: AuthenticationService
    ) {
    this.storage.get('utilisateur').then(res => {
      if (res) {
        this.utilisateur = res;
      }
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }
}
