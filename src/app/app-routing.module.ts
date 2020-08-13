import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSiteComponent } from './components/home-site/home-site.component';
import { ArtistSiteComponent } from './components/artist-site/artist-site.component';
import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { AlbumSiteComponent } from './components/album-site/album-site.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { SongSiteComponent } from './components/song-site/song-site.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { LoginSiteComponent } from './components/login-site/login-site.component';
import { RegistrationSiteComponent } from './components/registration-site/registration-site.component';

const routes: Routes = [
  { path: '', component: HomeSiteComponent },
  { path: 'artist', component: ArtistSiteComponent },
  { path: 'addArtist', component: AddArtistComponent },
  { path: 'editArtist/:id', component: AddArtistComponent },
  { path: 'album', component: AlbumSiteComponent },
  { path: 'addAlbum', component: AddAlbumComponent },
  { path: 'editAlbum/:id', component: AddAlbumComponent },
  { path: 'song', component: SongSiteComponent },
  { path: 'addSong', component: AddSongComponent },
  { path: 'editSong/:id', component: AddSongComponent },
  { path: 'login', component: LoginSiteComponent },
  { path: 'registration', component: RegistrationSiteComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
