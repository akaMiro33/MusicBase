import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-header-item',
  templateUrl: './search-header-item.component.html',
  styleUrls: ['./search-header-item.component.css']
})
export class SearchHeaderItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    console.log(event);
  }
}
