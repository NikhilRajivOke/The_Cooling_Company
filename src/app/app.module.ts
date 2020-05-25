import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BlogComponent,
    ProductsComponent,
    Products1Component,
    Products2Component

  ],
  imports: [
    BrowserModule,SlickCarouselModule,BrowserAnimationsModule,
    AppRoutingModule,RouterModule.forRoot([
      {
        path:"",component:HomeComponent
      },
      {
        path:"blogs",component:BlogComponent,
        
      },
      {
        path:"products",component:ProductsComponent
      },
      {
        path:"products1",component:Products1Component
      },
      {
        path:"products2",component:Products2Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
