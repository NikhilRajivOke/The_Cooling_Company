import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../../services/blog-service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})


export class AddBlogComponent implements OnInit {
  url:any;
  data={};
  addblog=new FormGroup({
      bloghead:new FormControl(),
      blogbody:new FormControl(),
  });
   handleInput(event){
    if(event.target.files && event.target.files[0]){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) =>{
        this.url = reader.result;

      }
    }
   }
  addSubmit(){
    //console.log(this.addblog.value);
    this.data['media']=this.url;
    this.data['blog_data']=this.addblog.value;

    this.ser.blogData(this.data).subscribe((response:{status:number,msg:string})=>{
      if(response.status==200){
        alert("Blog Created Successfully");
      }
    });
  }

  constructor(private ser : BlogService) { }

  ngOnInit() {

    $('#media').change(function(event){
      var tmppath = URL.createObjectURL(<HTMLElement>event.target.files[0]);

      if((event.target.files[0].name).includes('.mp4')){
        console.log("video");
        $("#img-display").hide();
        $("#vid-display").show().attr('src',URL.createObjectURL(event.target.files[0]));
      }
      else
      {
        $("#vid-display").hide();
        $("#img-display").show().attr('src',URL.createObjectURL(event.target.files[0]));
      }
    })
  }

}