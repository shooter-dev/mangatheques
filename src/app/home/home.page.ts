import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router) {}
  showManga() {
    this.route.navigate(['/ma-mangatheque']);
  }
  showAddSerie() {}
  showScan() {}
  showPartage() {}
}
