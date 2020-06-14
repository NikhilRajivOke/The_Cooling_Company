import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    constructor(private http: HttpClient){

    }

    blogData(data:any){
       return this.http.post("http://localhost:4004"+"/blog",data)
    }

    getBlogData(){
        return this.http.get("http://localhost:4004/getBlogData");
    }
    getInitBlog(head){
        return this.http.get("http://localhost:4004/initBlog/"+head);
    }
    addSubscriber(data)
    {
        //console.log(data);
        return this.http.post("http://localhost:4004"+"/addsubscriber",data);
    }
}

