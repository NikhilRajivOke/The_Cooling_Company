import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { FormGroup,FormControl } from '@angular/forms';
import { ContactUsService } from '../../services/contact-us.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(private ser: ContactUsService) { }
  @ViewChild('mapRef',{static:true}) mapElement:any;
  map:google.maps.Map


  contactus = new FormGroup({
      name : new FormControl(),
      /*location : new FormControl(),*/
      email_id : new FormControl(),
      phone : new FormControl(),
      company : new FormControl(),
      help : new FormControl(),
      call : new FormControl()
  })
 
  FormData(){
    /*console.log(this.contactus.value);*/
    this.ser.ContactUs(this.contactus.value).subscribe(
      (response:{msg:string})=>{
        console.log(response.msg);
      }
    );
  }

  ngOnInit(){
    this.RenderMap();
    $('#directions').click(()=>{
      if($('#directions').html()=="Get Directions"){
        $('#directions').html("Close Directions");
      }
      else{
        $('#directions').html("Get Directions");
      }
        $('#googleMaps').toggle(1000,"swing");
    });
  }
RenderMap=()=>{
    const mapProperties = {
      center: new google.maps.LatLng(18.499012, 73.810704),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }
}

