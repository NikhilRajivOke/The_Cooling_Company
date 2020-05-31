import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#change-brand').hide();
    $(window).scroll(()=>{
      var scroll = $(window).scrollTop();

      if(scroll > 25){
        $('#logo-img').hide();
        $('#change-brand').show();
        $('.navbar').addClass('scrolled');
      }
      else
      {
        $('#change-brand').hide();
        $('#logo-img').show();
        $('.navbar').removeClass('scrolled');
      }
    })
  }

}
