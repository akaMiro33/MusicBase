import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  namesOfMenuitem: string[] = ['Domov', 'Kapely', 'Albumy', 'Songy'];
  routes: string[] = ['', 'artist', 'album', 'song'];

  constructor() { }

  ngOnInit(): void {

  }

}
