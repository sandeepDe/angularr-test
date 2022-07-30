import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css'],
})
export class TodoViewComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService
  ) {}
  id: any;
  todo: any;
  ngOnInit() {
    // this.id = this._activatedRoute.snapshot.paramMap.get('id');

    //  this._userService.getAllTodos(this.id).subscribe((todoData)=>{
    //    this.todo = todoData
    //  })

    

     this._activatedRoute.paramMap
      .pipe(
        switchMap((params: Params) => {
          return this._userService.getAllTodos(params.get('id'));
        })
      )
      .subscribe((data) => {
        // console.log(data)
        this.todo = data
      });

    console.log(this.todo);
    
  }
}
