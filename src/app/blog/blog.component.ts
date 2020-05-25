import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  modalData:any;
  constructor() { }
  modalUpdate(data:any){
    this.modalData=data;
    console.log(this.modalData);
  }
  blogData = [
    {
      img: "../../assets/blog1.jpg",
      blog_head: "Blog Head2",
      blog_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
      author:'Kiran Sapali',
      post:'CEO,The Cooling Company'
    },
    {
      img: "../../assets/blog2.jpg",
      blog_head: "Blog Head3",
      blog_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
      author:'Kiran Sapali',
      post:'CEO,The Cooling Company'
    },
    {
      img: "../../assets/blog3.jpg",
      blog_head: "Blog Head4",
      blog_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
      author:'Kiran Sapali',
      post:'CEO,The Cooling Company'
    },
    {
      img: "../../assets/blog4.jpg",
      blog_head: "Blog Head5",
      blog_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
      author:'Kiran Sapali',
      post:'CEO,The Cooling Company'
    },
    {
      img: "../../assets/blog5.jpg",
      blog_head: "Blog Head6",
      blog_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
      author:'Kiran Sapali',
      post:'CEO,The Cooling Company'
    },
    {
      img: "../../assets/blog6.jpg",
      blog_head: "Blog Head2",
      blog_content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in',
      author:'Kiran Sapali',
      post:'CEO,The Cooling Company'
    }
  ]
  ngOnInit() {
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
      })
    });
  }

}
