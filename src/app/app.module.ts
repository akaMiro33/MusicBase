import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import { HomeSiteComponent } from './components/home-site/home-site.component';
import { ArtistSiteComponent } from './components/artist-site/artist-site.component';
import { SongSiteComponent } from './components/song-site/song-site.component';
import { AlbumSiteComponent } from './components/album-site/album-site.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SearchHeaderItemComponent } from './components/search-header-item/search-header-item.component';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { ArtistItemComponent } from './components/artist-item/artist-item.component';
import { SongItemComponent } from './components/song-item/song-item.component';
import { CountUpModule } from 'ngx-countup';
import { RegistrationSiteComponent } from './components/registration-site/registration-site.component';
import { LoginSiteComponent } from './components/login-site/login-site.component';

import { ArtistService } from './services/artist/artist.service';
import { AddSongComponent } from './components/add-song/add-song.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { AddArtistComponent } from './components/add-artist/add-artist.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    HomeSiteComponent,
    ArtistSiteComponent,
    SongSiteComponent,
    AlbumSiteComponent,
    MenuItemComponent,
    SearchHeaderItemComponent,
    AlbumItemComponent,
    ArtistItemComponent,
    SongItemComponent,
    RegistrationSiteComponent,
    LoginSiteComponent,
    AddSongComponent,
    AddAlbumComponent,
    AddArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountUpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ArtistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
