import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album';
import { Observable } from 'rxjs';
import { AlbumService } from '../../services/album/album.service';
import { AlbumBasicView } from 'src/app/models/AlbumBasicView';


@Component({
  selector: 'app-album-site',
  templateUrl: './album-site.component.html',
  styleUrls: ['./album-site.component.css']
})
export class AlbumSiteComponent implements OnInit {

  albumBasicViews: AlbumBasicView[];
  albumBasicViews$: Observable<AlbumBasicView[]>;

  numberOfRows: number;

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.loadAlbumBasicViews();

    this.transformObservableAlbumBasicViews();
  }


  createRange() {
     // tslint:disable-next-line: prefer-const
    const numberOfRow = Math.floor(this.albumBasicViews.length / 2) + 1 ;
    const items: number[] = [];
    for (let i = 1; i <= numberOfRow; i++) {
       items.push(i);
    }
    return items;
   }



  loadAlbumBasicViews() {
    this.albumBasicViews$ = this.albumService.getAlbumBasicViews();
  }

  transformObservableAlbumBasicViews() {
    this.albumBasicViews$.subscribe(result => { this.albumBasicViews = result; } );
  }


  deleteAlbum(album: AlbumBasicView) {
    console.log('delete me' , album.albumName);
    const ans = confirm('Naozaj chcem vymazat album s nazvom: ' + album.albumName);
    if (ans) {

    //  this.albumBasicViews.forEach( (item, index) => {
    //    if (item === album) { this.albums.splice(index, 1); }
    //  }
    //  );

      this.albumBasicViews = this.albumBasicViews.filter(al => al.albumId !== album.albumId);

      this.albumService.deleteAlbum(album.albumId).subscribe();
      // location.reload();
    }
  }
}
