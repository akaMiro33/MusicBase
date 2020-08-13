import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/Song';
import { Observable } from 'rxjs';
import { SongService } from '../../services/song/song.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album/album.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  newSong = new Song();
  parameter = 'id';
  selectHasError = true;
  albums$: Observable<Album[]>;

  constructor(private songsService: SongService,
              private avRoute: ActivatedRoute,
              private router: Router,
              private albumsService: AlbumService ) {
     if (this.avRoute.snapshot.params[this.parameter]) {
         this.songsService.getSong(this.avRoute.snapshot.params[this.parameter]).subscribe(
           song => this.newSong = song
         );
      }
   }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums() {
    this.albums$ = this.albumsService.getAlbums();
  }

  onSubmit() {

    if (this.avRoute.snapshot.params[this.parameter]) {
      this.songsService.updateSong(this.newSong.id, this.newSong).subscribe();
      alert( 'Uprava ' + this.newSong.name + ' je uspesna');
    } else {
      this.songsService.saveSong(this.newSong).subscribe();
      alert( 'Pridanie ' + this.newSong.name + ' je uspesne');
    }
    console.log(this.newSong);
    this.router.navigate(['song']);
  }

  checkSelectOption(value) {
    if ( value === '-- vyber moznost --' ||
         value === '') {
      this.selectHasError = true;
    } else {
      this.selectHasError = false;
    }
  }
}
