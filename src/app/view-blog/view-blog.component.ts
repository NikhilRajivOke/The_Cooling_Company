import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog-service';
import { FormGroup , FormControl } from '@angular/forms';
@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.scss']
})
export class ViewBlogComponent implements OnInit {

  head:string
  sub: any;
  data:any;
  initBlog=[];
  Blogs:any;
  topics=[{
    topic:"Demo1"
  },
{
  topic:"Demo2"
},{
  
    topic:"Demo3"
   
}]
Subscription = new FormGroup({
  email:new FormControl,
});

Subscribe(){
  this.ser.addSubscriber(this.Subscription.value).subscribe((resp:{status:number,msg:String})=>{
    if(resp.status==200){
      console.log(resp.msg);
    }
  });
}
getBlogData(){
  this.ser.getBlogData().subscribe((resp:{status:number,msg:String})=>{
    if(resp.status==200){
      this.Blogs=resp.msg;
    }
  })
}
  constructor(private route:ActivatedRoute,private ser : BlogService) { }
  getInitBlog(blog_head){
    this.ser.getInitBlog(blog_head).subscribe((resp:{status:number,data:any})=>{
      if(resp.status==200){
        this.initBlog=resp.data;
      }
    });
    
  }
 ChangeBlog(data){
   console.log("Function Called !!")
   this.initBlog=data;
   console.log(this.initBlog);
 }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
        this.head = params['blogData'];
    });
    this.getInitBlog(this.head);
    this.getBlogData();
  }

}
