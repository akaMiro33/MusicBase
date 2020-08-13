import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { Album } from './../../models/album';
import { AlbumBasicView } from 'src/app/models/AlbumBasicView';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {
  @Input() albumBasicViews: AlbumBasicView;
  @Output() deleteAlbumEvent: EventEmitter<AlbumBasicView> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteAlbum() {
    // console.log('mazeme', this.album.name);
    // const ans = confirm('Naozaj chcem vymazat piesen s nazvom: ' + this.song.name);
    // if (ans) {
      // this.songsService.deleteSong(this.song.id).subscribe();
      // location.reload();
    this.deleteAlbumEvent.emit(this.albumBasicViews);
   // }

  }

}
