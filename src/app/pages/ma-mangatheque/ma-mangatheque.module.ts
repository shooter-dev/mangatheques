import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaMangathequePage } from './ma-mangatheque.page';

const routes: Routes = [
  {
    path: '',
    component: MaMangathequePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaMangathequePage]
})
export class MaMangathequePageModule {}
