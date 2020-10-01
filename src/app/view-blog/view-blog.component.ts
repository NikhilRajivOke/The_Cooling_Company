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

  blogid:string
  sub: any;
  data:any;
  initBlog:any;
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
  this.ser.getBlogData().subscribe((resp:{status:number,data:any})=>{
    if(resp.status==200){
      this.Blogs=JSON.parse(resp.data).items;
    }
});
}
getImageUrl(data:any){
  const parser = new DOMParser();
  const html = parser.parseFromString(data.content,'text/html');
  const img = html.querySelector('img');
  const url = img ? img.src : '';
  return url;
}
  constructor(private route:ActivatedRoute,private ser : BlogService) { }
  getInitBlog(blog_id){
    /*this.ser.getInitBlog(blog_head).subscribe((resp:{status:number,data:any})=>{
      if(resp.status==200){
        this.initBlog=resp.data;
      }
    });*/
    this.ser.getInitBlog(blog_id).subscribe((resp:{status:200,data:any})=>{
      if(resp.status==200){
       this.initBlog=JSON.parse(resp.data);
      }
      document.getElementById('bloginsert').innerHTML = this.initBlog.content;
  });
  }
 ChangeBlog(data){
   console.log("data id : ",data.id);
    this.getInitBlog(data.id);
    $('html, body').animate({ scrollTop: 25 }, 'slow');
 }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params=>{
        this.blogid = params['blogData'];
    });
    this.getInitBlog(this.blogid);
    this.getBlogData();
  }

}
