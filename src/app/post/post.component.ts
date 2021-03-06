import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Post[] = [];
  post: Post;
  postid: string;

  constructor(private postService: PostService) { 
  }

  ngOnInit(): void {
    this.postService.getAll().subscribe(res => {
      this.posts = res;
    })
  }

  getPost = () => {
    this.postService.getSingle(parseInt(this.postid)).subscribe(res => {
      this.post = res;
    })
  }

}
