import { Component, OnInit } from '@angular/core';
import { Artist} from '../../models/Artist';
import { Observable } from 'rxjs';
import { ArtistService } from '../../services/artist/artist.service';
import { ArtistBasicView } from 'src/app/models/ArtistBasicView';

@Component({
  selector: 'app-artist-site',
  templateUrl: './artist-site.component.html',
  styleUrls: ['./artist-site.component.css']
})
export class ArtistSiteComponent implements OnInit {
  // artists: Artist[];
  artists$: Observable<Artist[]>;
  artistBasicViews$: Observable<ArtistBasicView[]>;
  constructor(private artistsService: ArtistService) {

  }

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists() {
    this.artists$ = this.artistsService.getArtists();
    this.artistBasicViews$ = this.artistsService.getArtistBasicViews();
  }

  deleteArtist(artist: ArtistBasicView) {
     console.log('delete me' , artist.artistName);
     const ans = confirm('Naozaj chcem vymazat piesen s nazvom: ' + artist.artistName);
     if (ans) {
     this.artistsService.deleteArtist(artist.artistId).subscribe(() => this.loadArtists());
    // location.reload();

     }
  }

}
