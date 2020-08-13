import { Component, OnInit, ViewChild } from '@angular/core';
import { Album } from '../../models/Album';
import { Observable } from 'rxjs';
import { AlbumService } from '../../services/album/album.service';
import { ArtistService } from '../../services/artist/artist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/models/Artist';
import { AlbumBasicInput } from 'src/app/models/AlbumBasicInput';
import { AlbumBasicUpdate } from 'src/app/models/AlbumBasicUpdate';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent implements OnInit {
  newAlbumUpdate = new AlbumBasicUpdate();
  newAlbumInput = new AlbumBasicInput();
  parameter = 'id';
  artists$: Observable<Artist[]>;
  selectHasError = true;

  // @ViewChild('artist') artistHTML;

  constructor(private albumsService: AlbumService,
              private artistsService: ArtistService,
              private avRoute: ActivatedRoute,
              private router: Router) {

    if (this.avRoute.snapshot.params[this.parameter]) {
      this.albumsService.getAlbumToEditView(this.avRoute.snapshot.params[this.parameter]).subscribe(
        albumToEdit => this.newAlbumUpdate = albumToEdit
        );
      }


    }

  ngOnInit(): void {
      this.loadArtists();
  }

  loadArtists() {
    this.artists$ = this.artistsService.getArtists();
  }

  onSubmit() {

    if (this.avRoute.snapshot.params[this.parameter]) {

      this.albumsService.updateAlbum(this.newAlbumUpdate.id, this.newAlbumUpdate).subscribe(
          () => alert( 'Uprava ' + this.newAlbumUpdate.name + ' je uspesna')
      );
    } else {
      this.transformUpdate();
      this.albumsService.saveAlbumBasicInput(this.newAlbumInput).subscribe(
          () => alert( 'Pridanie ' + this.newAlbumInput.name + ' je uspesne')
      );
    }
    console.log(this.newAlbumInput);
    this.router.navigate(['album']);
  }


  transformUpdate() {
    this.newAlbumInput = this.newAlbumUpdate;
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
