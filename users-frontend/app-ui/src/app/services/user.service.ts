import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:8080/api/v1/users";

  constructor(private httpClient: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  addUser(user: User) : Observable<User> {
    return this.httpClient.post<User>(this.baseURL, user);
  }

  getUserById(id: number) : Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  updateUser(id: number, user: User) : Observable<User> {
    return this.httpClient.put<User>(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number) : Observable<Object> {
    return this.httpClient.delete<Object>(`${this.baseURL}/${id}`);
  }
}
