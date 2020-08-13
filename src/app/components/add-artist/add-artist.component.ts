import { Component, OnInit } from '@angular/core';
import { Artist } from '../../models/Artist';
import { Observable } from 'rxjs';
import { ArtistService } from '../../services/artist/artist.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtistBasicView } from 'src/app/models/ArtistBasicView';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  newArtist = new Artist();
  parameter = 'id';


  constructor(private artistsService: ArtistService,  private avRoute: ActivatedRoute, private router: Router) {
    if (this.avRoute.snapshot.params[this.parameter]) {
      this.artistsService.getArtist(this.avRoute.snapshot.params[this.parameter]).subscribe(
        artist => this.newArtist = artist
      );
   }
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.newArtist.linkToImage = 'fdsfds';

    if (this.avRoute.snapshot.params[this.parameter]) {
      this.artistsService.updateArtist(this.newArtist.id, this.newArtist).subscribe(
      );
      alert( 'Uprava ' + this.newArtist.name + ' je uspesna');
    } else {
      this.artistsService.saveArtist(this.newArtist).subscribe(
      );
      alert( 'Pridanie ' + this.newArtist.name + ' je uspesne');
    }
    console.log(this.newArtist);
    this.router.navigate(['artist']);
  }

}
