import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Song } from './../../models/Song';
import { SongBasicView } from 'src/app/models/SongBasicView';
// import { SongService } from '../../services/song/song.service';

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input() songBasicView: SongBasicView;
  @Output() deleteSongEvent: EventEmitter<SongBasicView> = new EventEmitter();

  constructor(
    // private songsService: SongService
    ) { }

  ngOnInit(): void {
  }


  deleteSong() {
    // const ans = confirm('Naozaj chcem vymazat piesen s nazvom: ' + this.song.name);
    // if (ans) {
      // this.songsService.deleteSong(this.song.id).subscribe();
      // location.reload();
      this.deleteSongEvent.emit(this.songBasicView);
   // }

  }
}
