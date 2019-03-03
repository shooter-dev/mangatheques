import { Injectable } from '@angular/core';
import { Observable, of, throwError, TimeoutError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://nas.shooterdev.fr:3000/api/mangatheques/v0/';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) {
    // ...
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }
  SerieGetAll(): Observable<any> {
    console.log('liste item mangas');
    return this.http.get(apiUrl + '/mangas', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  SerieGetById(id: string): Observable<any> {
    console.log('item [ manga ] => ' + id);
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  SerieInsert(code: string, titre: string, tome: Number, resume: string, idSerie: Number, isLu: boolean, isAcquis: boolean) {
    console.log('add manga');
    const url = `${apiUrl}/manga/add`;
    return this.http.post(url, '', httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  // tslint:disable-next-line:max-line-length
  SerieUpdateById(code: string, titre: string, tome: Number, resume: string, idSerie: Number, isLu: boolean, isAcquis: boolean): Observable<any> {
    console.log('update [ manga ] => ' + code);
    const url = `${apiUrl}/manga/${code}`;
    return this.http.put(url, '', httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  SerieDeleteById(id: string): Observable<{}> {
    console.log('delete [ manga ] => ' + id);
    const url = `${apiUrl}/manga/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
