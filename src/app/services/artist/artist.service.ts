import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Artist } from '../../models/Artist';
import { ArtistBasicView } from 'src/app/models/ArtistBasicView';



@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Artists/';
   }

   getArtists(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  saveArtist(artist): Observable<Artist> {
    return this.http.post<Artist>(this.myAppUrl + this.myApiUrl, JSON.stringify(artist), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}

  deleteArtist(artistId: number): Observable<Artist> {
    return this.http.delete<Artist>(this.myAppUrl + this.myApiUrl + artistId)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}

getArtist(artistId: number): Observable<Artist> {
  return this.http.get<Artist>(this.myAppUrl + this.myApiUrl + artistId)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

updateArtist(artistId: number, artist): Observable<Artist> {
  return this.http.put<Artist>(this.myAppUrl + this.myApiUrl + artistId, JSON.stringify(artist), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

getArtistBasicViews(): Observable<ArtistBasicView[]> {
  const endOfUrl = 'View';
  return this.http.get<ArtistBasicView[]>(this.myAppUrl + this.myApiUrl + endOfUrl)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

getArtistToEditView(artistId: number): Observable<ArtistBasicView> {
  const endOfUrl = 'EditView/';
  return this.http.get<ArtistBasicView>(this.myAppUrl + this.myApiUrl + endOfUrl + artistId)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
