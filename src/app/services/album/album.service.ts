import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Album } from '../../models/Album';
import { AlbumBasicView } from '../../models/AlbumBasicView';
import { AlbumBasicInput } from 'src/app/models/AlbumBasicInput';
import { AlbumBasicUpdate } from 'src/app/models/AlbumBasicUpdate';


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Albums/';
   }

   getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  saveAlbum(album): Observable<Album> {
    return this.http.post<Album>(this.myAppUrl + this.myApiUrl, JSON.stringify(album), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}

  deleteAlbum(albumId: number): Observable<Album> {
    return this.http.delete<Album>(this.myAppUrl + this.myApiUrl + albumId)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
  );
  }

  getAlbum(albumId: number): Observable<Album> {
    return this.http.get<Album>(this.myAppUrl + this.myApiUrl + albumId)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  updateAlbum(albumId: number, album: AlbumBasicUpdate): Observable<AlbumBasicUpdate> {
    return this.http.put<AlbumBasicUpdate>(this.myAppUrl + this.myApiUrl + albumId, JSON.stringify(album), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }


  getAlbumBasicViews(): Observable<AlbumBasicView[]> {
    const endOfUrl = 'View';
    return this.http.get<AlbumBasicView[]>(  this.myAppUrl + this.myApiUrl + endOfUrl )
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  saveAlbumBasicInput(albumBasicInput): Observable<AlbumBasicInput> {
    const endOfUrl = 'Input';
    return this.http.post<AlbumBasicInput>(this.myAppUrl + this.myApiUrl + endOfUrl, JSON.stringify(albumBasicInput), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}

  getAlbumToEditView(albumId: number): Observable<AlbumBasicUpdate> {
    const endOfUrl = 'EditView/';
    return this.http.get<AlbumBasicUpdate>(this.myAppUrl + this.myApiUrl + endOfUrl + albumId)
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
