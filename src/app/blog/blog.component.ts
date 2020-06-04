import { Component, OnInit } from '@angular/core';
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
  constructor(private router : Router,private ser:BlogService) { }
  modalUpdate(data:any){
    this.modalData=data;
    console.log(this.modalData);
  }

  Login = new FormGroup({
    user_id:new FormControl(),
    password : new FormControl(),
  });
  blogData=[];
   
  LoginSubmit(){
    
    if(this.Login.value.user_id == "Kiran" && this.Login.value.password=="thecoolingcompany")
      {
        
        this.router.navigate(['/add-blog'])}
      else{
        alert("Invalid User !!");
      }
    
  }

  getBlogData(){
    this.ser.getBlogData().subscribe((resp:{status:number,msg:any})=>{
        if(resp.status==200){
            this.blogData = resp.msg;
            console.log(this.blogData);
        }
    });
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

}
