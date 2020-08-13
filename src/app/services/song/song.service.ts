import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Song } from '../../models/Song';
import { SongBasicView } from 'src/app/models/SongBasicView';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/Songs/';
   }

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.myAppUrl + this.myApiUrl)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }

  saveSong(song): Observable<Song> {
    return this.http.post<Song>(this.myAppUrl + this.myApiUrl, JSON.stringify(song), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    ) ;
}

  deleteSong(songId: number): Observable<Song> {
    return this.http.delete<Song>(this.myAppUrl + this.myApiUrl + songId)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
  );
}

  getSong(songId: number): Observable<Song> {
    return this.http.get<Song>(this.myAppUrl + this.myApiUrl + songId)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
}

updateSong(songId: number, song): Observable<Song> {
  return this.http.put<Song>(this.myAppUrl + this.myApiUrl + songId, JSON.stringify(song), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
}

getSongBasicViews(): Observable<SongBasicView[]> {
  const endOfUrl = 'View';
  return this.http.get<SongBasicView[]>(this.myAppUrl + this.myApiUrl + endOfUrl)
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
