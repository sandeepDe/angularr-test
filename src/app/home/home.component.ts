import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  detailsOfUser :any;

  ngOnInit() {}

  addItem(data) {
    console.log(data);
    this.detailsOfUser = data
  }
}
