import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogserviceService } from '../blogservice.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  createBlogs= new FormGroup({
    title: new FormControl(''),
    blogBody: new FormControl(''),
    author: new FormControl('')

  })
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  createBlog(){
    console.warn(this.createBlogs.value);
    this.blog.saveBlog(this.createBlogs.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Blog Added Successfully");
      this.createBlogs.reset();
      this.router.navigate(['blog']);
    })
  }
}
