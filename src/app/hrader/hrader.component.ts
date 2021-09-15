import { Component, OnInit } from '@angular/core';
import { BlogserviceService } from '../blogservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hrader',
  templateUrl: './hrader.component.html',
  styleUrls: ['./hrader.component.css']
})
export class HraderComponent implements OnInit {

  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  gotoBlogList(){
    this.router.navigate(['blog']);
  }
  gotoAddBlog(){
    this.router.navigate(['blog/add']);
  }
}
