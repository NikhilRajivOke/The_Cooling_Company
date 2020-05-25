import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.scss']
})
export class Products2Component implements OnInit {

  data:any=[];
  
  constructor() { }

  ngOnInit() {
  }
  dataList=
    {"img":"././assets/products/dehumid_dryer.jpg",
    "title":"Demo Title"
    }

  
}
