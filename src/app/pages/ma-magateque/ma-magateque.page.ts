import { Component, OnInit } from '@angular/core';
import { SerieApiService } from 'src/app/services/serie.api.service';
import { Serie } from 'src/app/entities/serie.entity';
import { error } from 'util';
import { ToastController } from '@ionic/angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-ma-magateque',
  templateUrl: './ma-magateque.page.html',
  styleUrls: ['./ma-magateque.page.scss'],
})
export class MaMagatequePage implements OnInit {

  public itemHeight: number = 0;
  series: Serie[];

  public items: any = [];
  constructor(
    public serieApi: SerieApiService, private toastController: ToastController) {
    this.serieApi.getAll().subscribe(
      res => {
        this.series = res;
        console.log(this.series);
      },
      error => {
        this.toastController.create({
          message: error,
          position: 'middle'
        });
      }
    );
    this.items = [
    {expanded: false},
    {expanded: true},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false},
    {expanded: false}];
  }


  ngOnInit() {}

  removeItem(item) {
    for (let i = 0 ; i < this.series.length ; i++) {

      if (this.series[i] === item) {
        this.series.splice(i, 1);
      }

    }

  }

  expandItem(item) {
    this.items.map((listItem: { expanded: boolean; }) => {
      if (item === listItem) {
          listItem.expanded = !listItem.expanded;
      } else {
          listItem.expanded = false;
      }
      return listItem;
    });
  }
}
