import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations:[]
})
export class FooterComponent implements OnInit {

  enquireForm = new FormGroup({
    name : new FormControl(),
    email : new FormControl(),
    phone : new FormControl(),
    subject : new FormControl(),
    message : new FormControl()
  })
  constructor() { }
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
    $(document).ready(function(){
      $('.coh').hover(function(){
        $(this).animate({ left:52 });
    }, function() {
        $(this).animate({ right:52 });
    })
      
  });

  }
  
}
