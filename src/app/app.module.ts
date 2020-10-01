import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { Products1Component } from './products1/products1.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
  
    Products1Component,
  
    ContactusComponent,
    AddBlogComponent,
    ViewBlogComponent,
    AboutusComponent,
    ServicesComponent

  ],
  imports: [
    BrowserModule,SlickCarouselModule,BrowserAnimationsModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot([
      {
        path:"",component:HomeComponent
      },
      {
        path:"blogs",component:BlogComponent,
        
      },
      {
        path:"products1",component:Products1Component
      },
      {
        path:"contactus",component:ContactusComponent
      },
      {
        path:"add-blog",component:AddBlogComponent
      },
      {
        path:"view-blog/:blogData",component:ViewBlogComponent
      },
      {
        path:"about",component:AboutusComponent
      },
      {
        path:"service",component:ServicesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
