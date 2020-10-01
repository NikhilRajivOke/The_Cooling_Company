import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import * as $ from 'jquery';
import {BlogService} from '../../services/blog-service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations:[]
})
export class FooterComponent implements OnInit {
  Blogs:any;
  enquireForm = new FormGroup({
    name : new FormControl(),
    email : new FormControl(),
    phone : new FormControl(),
    subject : new FormControl(),
    message : new FormControl()
  })
  constructor(private ser : BlogService) { }
  getBlogData(){
    this.ser.getBlogData().subscribe((resp:{status:number,data:any})=>{
      if(resp.status==200){
        //console.log(resp.data);
        this.Blogs=JSON.parse(resp.data).items;
      }
  });
};
  FD=[
    {link:"SERVICES"},
    {link:"PROJECTS"},
    {link:"PRICING"},
    {link:"ABOUT US"},
    {link:"BLOG"},
    {link:"CONTACT US"},
    {link:"REQUEST A PROPOSAL"},
    {link:"PRODUCT REVIEWS"}
  ];
  
  ngOnInit() {
    this.getBlogData();
    $(document).ready(function(){
      $('.coh').hover(function(){
        $(this).animate({ left:52 });
    }, function() {
        $(this).animate({ right:52 });
    })
      
  });

  }
  
}
