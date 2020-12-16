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
    return this.httpClient.post<Post>("http://localhost:3000/posts", post)
  }

  update = (post: Post, id: number): Observable<Post> =>{
    return this.httpClient.put<Post>("http://localhost:3000/posts/" + id, post)
  }

  delete = (id: String) =>{
    return this.httpClient.delete("http://localhost:3000/posts/" + id)
  }
}
