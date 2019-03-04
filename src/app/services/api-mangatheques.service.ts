import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiMangathequesService {
  constructor(private http: HttpClient) {
    //
  }
  // private apiUrl = 'http://10.0.0.10:3000/api/mangatheques/v1/series/all';
  // private apiUrl = 'http://nas.shooterdev.fr:3000/api/mangatheques/v1/series/all';
  private apiUrl = 'http://10.0.20.100:3000/api/mangatheques/v1';

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  setApiGet(chemin: string, data: any): Observable<any> {
    return this.http.get(this.apiUrl + chemin, httpOptions).pipe(
      map(this.extractData));
  }

  setApiPost(chemin: string, data: any): Observable<any> {
    return this.http.post(this.apiUrl + chemin, data, httpOptions).pipe(
      map(this.extractData));
  }
}
