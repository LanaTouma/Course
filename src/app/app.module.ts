import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MoviesComponent } from './dashboard/movies/view/view-movies.component';
import { AddMoviesComponent } from './dashboard/movies/add/add-movies/add-movies.component';
import { EditMovieComponent } from './dashboard/movies/edit/edit-movies/edit-movies.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './dashboard/layouts/navbar/navbar.component';
import { MoviesModule } from './dashboard/movies/view/view-movies.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    AddMoviesComponent,
    EditMovieComponent,
    NavbarComponent,
    LoginComponent,

   
 

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MoviesModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
