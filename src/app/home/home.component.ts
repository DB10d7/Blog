import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogserviceService } from '../blogservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private blog:BlogserviceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  bloglist(){
    this.router.navigate(['blog']);
  }
  createblog(){
    this.router.navigate(['blog/add']);
  }

}
