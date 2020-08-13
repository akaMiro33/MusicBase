import { Component, OnInit, Input, EventEmitter, Output   } from '@angular/core';
import { Artist } from './../../models/Artist';
import { CountUpOptions } from 'countup.js';
import { ArtistBasicView } from 'src/app/models/ArtistBasicView';

@Component({
  selector: 'app-artist-item',
  templateUrl: './artist-item.component.html',
  styleUrls: ['./artist-item.component.css']
})
export class ArtistItemComponent implements OnInit {
  @Input() artist: Artist;
  @Input() artistBasicView: ArtistBasicView;
  @Output() deleteArtistEvent: EventEmitter<ArtistBasicView> = new EventEmitter();
  opts: CountUpOptions;


  constructor() { }

  ngOnInit(): void {
  }

  deleteArtist() {
    //
    // const ans = confirm('Naozaj chcem vymazat piesen s nazvom: ' + this.song.name);
    // if (ans) {
    // this.songsService.deleteSong(this.song.id).subscribe();
    // location.reload();
     this.deleteArtistEvent.emit(this.artistBasicView);
    // }

  }

}
