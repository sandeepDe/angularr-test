import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _httpClient: HttpClient) {}

  getAllUsers = (): Observable<any> => {
    const url = 'https://jsonplaceholder.typicode.com/users';

    return this._httpClient.get<any>(url, { responseType: 'json' });
  };

  getAllTodos = (userId): Observable<any> => {
    const todoUrl = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    console.log(todoUrl);
    return this._httpClient.get<any>(todoUrl, { responseType: 'json' });
  };
}
