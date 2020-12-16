import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll = (): Observable<User[]> => {
    return this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  create = (user: User): Observable<User> =>{
    return this.httpClient.post<User>("temp", user)
  }

  update = (user: User): Observable<User> =>{
    return this.httpClient.put<User>("temp", user)
  }

  delete = (id: String) =>{
    return this.httpClient.delete("temp")
  }
}
