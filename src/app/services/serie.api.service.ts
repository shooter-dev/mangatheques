import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieApiService {

  apiUrl = 'http://nas.shooterdev.fr:3000/api/mangatheques/v1/';
  constructor(private http: Http) {}
  getAll(): Observable<any> {
    console.log('liste item series');
    return this.http.get(this.apiUrl + 'series').pipe(
    map((res: Response) => {
      return res.json();
    }));
  }
  getById(id: string) {}
  insert(nom: string, resume: string) {}
  updateById(id: string, nom: string, resume: string) {}
  deleteById(id: string) {}
}
