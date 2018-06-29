import { Injectable } from '@angular/core';
import { Colour } from '../models/colour';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ColourService {

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened');
  }

  getSchemes(query?: string): Observable<Colour[]> {
    if(query) {
      return this.http.get<Colour[]>(`http://api.tkusaka.com/palette_api.php?api_key=5b3540c7e9057&palette_id=${query}`).pipe(
        catchError(this.handleError)
      );
    }
    return this.http.get<Colour[]>('http://api.tkusaka.com/palette_api.php?api_key=5b3540c7e9057').pipe(
      catchError(this.handleError)
    );
  }

  getColourById(id) {
    return this.http.get<Colour>(`http://api.tkusaka.com/palette_api.php?api_key=5b3540c7e9057&palette_id=${id}`).pipe(
      catchError(this.handleError)
    );
  }

  constructor(
    private http: HttpClient
  ) { }
}
