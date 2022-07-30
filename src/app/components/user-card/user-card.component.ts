import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() parentData: any;

  constructor(private _router: Router) {}

  ngOnInit() {}

  getUserDetails = (parentData: any) => {
    console.log(parentData);
    this._router.navigate(['/user-details', parentData]);
  };
}
