import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() parentData: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this._activatedRoute.data.subscribe((data) => {
      console.log(data);
    });
  }

  sendIdToTodo = (userId: number) => {
    this._router.navigate(['/todos', userId]);
  };
}

// this.activatedroute.data.subscribe(data => {
//   console.log(data);
// })
