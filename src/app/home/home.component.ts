import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  screensize : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  /*AddServices(){
    let x = document.getElementById("addservice");

    if (x.style.display === "none") {
      document.getElementById('btn-services').innerHTML="Collapse Services";
      x.style.display = "block";
    } else {
      document.getElementById('btn-services').innerHTML="View More Services";
      x.style.display = "none";
    }
  }*/
  
}
