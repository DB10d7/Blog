import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';
import { HomeComponent } from './home/home.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';

const routes: Routes = [

  {
    component: HomeComponent,
    path: ''
  },
  {
    component: BlogListComponent,
    path: 'blog'
  },
  {
    component: CreateBlogComponent,
    path: 'blog/add'
  },
  {
    component: UpdateBlogComponent,
    path: 'blog/update/:id'
  },
  {
    component: DisplayblogComponent,
    path: 'blog/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
