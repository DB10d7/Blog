import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  listblog:any;
  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.blog.getBlog().subscribe((resp)=>{

      this.listblog = resp;
      })
  }
  viewBlog(id: String){
    this.router.navigate(['blog',id]);
  }
  deleteBlog(id: String){

    this.blog.deleteBlog(id).subscribe((res)=>{
      console.warn("data is here",res);
      alert("Delete Blog");
      this.ngOnInit();
    })
  }
  updateBlog(id: String){
    this.router.navigate(['blog/update',id]);
  }
  createBlog(){
    this.router.navigate(['blog/add']);
  }

}
