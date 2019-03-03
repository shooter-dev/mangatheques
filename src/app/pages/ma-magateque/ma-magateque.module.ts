import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaMagatequePage } from './ma-magateque.page';
import { AccordionListComponent } from '../../accordion-list/accordion-list.component';


const routes: Routes = [
  {
    path: '',
    component: MaMagatequePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MaMagatequePage,
    AccordionListComponent
  ]
})
export class MaMagatequePageModule {}
