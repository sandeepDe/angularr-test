import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todos/:id', component: TodoViewComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
