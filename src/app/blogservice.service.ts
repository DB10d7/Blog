import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogserviceService {

  url="http://localhost:4000/blogs/";
  
  constructor(private http: HttpClient) {}

  getBlog(){
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
  saveBlog(res:any){
    console.warn("service",res);
    return this.http.post<any>("http://localhost:4000/blogs/add",res);
  }
  viewBlog(id: String){
    console.log(this.http.get("http://localhost:4000/blogs/"+id));
    return this.http.get("http://localhost:4000/blogs/"+id);
  }
  deleteBlog(id: String){
    return this.http.delete("http://localhost:4000/blogs/delete/"+id);
  }
  updateBlog(id: String, data: any){
    return this.http.put<any>("http://localhost:4000/blogs/update/"+id, data);
  }
  

}
