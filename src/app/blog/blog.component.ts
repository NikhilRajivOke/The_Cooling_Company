import { Component, OnInit} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { BlogService } from '../../services/blog-service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({

  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  modalData:any;
  flag:number=1;
  switch=true; 
  
  constructor(private router : Router,private ser:BlogService) { }
  modalUpdate(data:any){
    this.modalData=data;
      }
  Login = new FormGroup({
    user_id:new FormControl(),
    password : new FormControl(),
  });
  getImageUrl(data:any){
    const parser = new DOMParser();
    const html = parser.parseFromString(data.content,'text/html');
    const img = html.querySelector('img');
    const url = img ? img.src : '';
    return url;
  }
  blogData:any;
  flagVal(){
    
    this.flag += 1;
    
  }
  LoginSubmit(){

    if(this.Login.value.user_id == "Kiran" && this.Login.value.password=="thecoolingcompany")
      {

        this.router.navigate(['/add-blog'])}
      else{
        alert("Invalid User !!");
      }

  }

  getBlogData(){
 
    this.ser.getBlogData().subscribe((resp:{status:number,data:any})=>{
        if(resp.status==200){
          this.blogData = JSON.parse(resp.data).items;
          
        }
        
    });
    
  }

  showBlog(blogData){
    this.router.navigate(['/view-blog',blogData.id]);
  }
  ngOnInit() {
    this.getBlogData();
    $(document).ready(function () {

      $('#our_story').stop(true).animate({ left: "30%" }, 3000);

      $('#sub_head').stop(true).animate({ right: "20%" }, 3000);

      $('#hidden-blogs').hide();
      $('#close-blog').hide();

      $('#view-blogs').click(function(){
        $('#view-blogs').hide()
        $('#hidden-blogs').fadeIn(5000);
        $('#close-blog').fadeIn(8000);
      });

      $('#close-blog').click(function(){
        $('#close-blog').hide();
        $('#hidden-blogs').fadeOut("fast");
        $('#view-blogs').show();
      });
    });
  }

  changeCss(){
    if(this.switch==true){
    $('#blog-view').css('flex-direction','row');
    
    this.switch=false;
    
    }
    else{
      $('#blog-view').css('flex-direction','row-reverse');
      
      this.switch=true;
      
    }
  }
  ngAfterViewInit(){
    
  }

}
