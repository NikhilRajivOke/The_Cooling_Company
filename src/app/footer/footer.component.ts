import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations:[]
})
export class FooterComponent implements OnInit {

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
