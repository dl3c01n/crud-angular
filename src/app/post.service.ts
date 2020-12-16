import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll = (): Observable<Post[]> => {
    return this.httpClient.get<Post[]>("http://localhost:3000/posts")
  }

  create = (post: Post): Observable<Post> =>{
    return this.httpClient.post<Post>("temp", post)
  }

  update = (post: Post): Observable<Post> =>{
    return this.httpClient.put<Post>("temp", post)
  }

  delete = (id: String) =>{
    return this.httpClient.delete("temp")
  }
}
