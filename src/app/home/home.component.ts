import { Component, OnInit, AfterContentInit, OnDestroy, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import ScrollOut from 'scroll-out';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterContentInit,OnDestroy {
  screensize: boolean = false;
  so:any;
  constructor(private el: ElementRef) { }
  imagesData = [
    { img: "../assets/ac-soln.jpg", title: "1" },
    { img: "../assets/cold-storage.jpg", title: "2" },
    { img: "../assets/cold-ware.jpg", title: "3" },
    { img: "../assets/ripening.jpg", title: "4" },
    { img: "../assets/cold-ware.jpg", title: "5" },
    { img: "../assets/ac-soln.jpg", title: "6" },
    { img: "../assets/cold-storage.jpg", title: "7" },
    { img: "../assets/cold-ware.jpg", title: "8" },

  ];
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    'autoplay':true,
    'autoplaySpeed': 3500,
    'dots': true,
    'infinite': true,
    'arrows': true,
    'responsive': [
      {
        'breakpoint': 1600,
        'settings': {
          'slidesToShow': 3,
          'slidesToScroll': 1,
        }
      },
      {
        'breakpoint': 1000,
        'settings': {
          'slidesToShow': 2,
          'slidesToScroll': 1,
        }
      },
      {
        'breakpoint': 600,
        'settings':
        {
          'slidesToShow': 1,
          'slidesToScroll': 1,
        }
      }]

  };
  ngOnInit() {
   $('#check-btn').click(()=>{
     $('html,body').animate({
      scrollTop: $('#serv-div').offset().top},
      3000
     )
   })
  }

 ngAfterContentInit(){
 this.so = ScrollOut({
   scope:this.el.nativeElement
 });
 }
 ngOnDestroy(){
  this.so.teardown();
 }

}
