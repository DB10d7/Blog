import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogserviceService } from '../blogservice.service';


@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  updateBlogs= new FormGroup({
    title: new FormControl(''),
    blogBody: new FormControl(''),
    author: new FormControl('')

  })

  //title?: string;

  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.blog.viewBlog(this.route.snapshot.params['id']).subscribe((result: any)=>{
       /* for (let obj in result) {
          console.log(`${obj});
        }*/
        this.updateBlogs.patchValue({
         title: result['title'], 
         blogBody: result['blogBody'], 
         author: result['author'] 
        });

        console.log(result['title']);
    });
     /* this.updateBlogs.patchValue({
        title: result.value.title, 
      });
      console.log(this.updateBlogs);
    })
    this.updateBlogs.patchValue({
      title: 'hi', 
    });*/

  }

  updateBlog(){
    console.warn(this.updateBlogs.value)
    this.blog.updateBlog(this.route.snapshot.params['id'],this.updateBlogs.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Blog Updated Successfully");
      this.updateBlogs.reset();
      this.router.navigate(['blog']);
    })
  }
}
