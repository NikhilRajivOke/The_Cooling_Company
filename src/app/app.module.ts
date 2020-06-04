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
import { ProductsComponent } from './products/products.component';
import { Products1Component } from './products1/products1.component';
import { Products2Component } from './products2/products2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
    ProductsComponent,
    Products1Component,
    Products2Component,
    ContactusComponent,
    AddBlogComponent

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
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
