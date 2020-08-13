import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/Song';
import { Observable } from 'rxjs';
import { SongService } from '../../services/song/song.service';
import { SongBasicView } from 'src/app/models/SongBasicView';

@Component({
  selector: 'app-song-site',
  templateUrl: './song-site.component.html',
  styleUrls: ['./song-site.component.css']
})
export class SongSiteComponent implements OnInit {
  // songs: Song[];
  // songs$: Observable<Song[]>;

  songBasicViews$: Observable<SongBasicView[]>;
  songBasicViews: SongBasicView[];

  constructor(private songsService: SongService) { }

  ngOnInit(): void {
    this.loadSongs();

  }

  loadSongs() {
    // this.songs$ = this.songsService.getSongs();
    this.songBasicViews$ = this.songsService.getSongBasicViews();
    this.songBasicViews$.subscribe( songs => { this.songBasicViews = songs; });
  }

  deleteSong(song: SongBasicView) {
    console.log('delete me' , song.SongName);
    const ans = confirm('Naozaj chcem vymazat piesen s nazvom: ' + song.SongName);
    if (ans) {
     this.songsService.deleteSong(song.SongId).subscribe(() => this.loadSongs());
      // location.reload();

    }
  }
}
