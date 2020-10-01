import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    'autoplay': true,
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
  }

}
