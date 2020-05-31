import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class ContactUsService {
    constructor(private http: HttpClient){

    }
    ContactUs(data){
        //console.log(data);
        console.log(data);
       return this.http.post("http://localhost:4004"+"/cus",data);
    }
}