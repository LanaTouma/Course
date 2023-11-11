import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarService } from './navbar.service';
import { MoviesService } from '../../movies.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  logoutButton:        boolean = false; 
  searchTerm:          string = '';

  actors:              any[] = [];
  genres:              any[] = [];

  constructor(private moviesService: MoviesService<any>,private navbarService: NavbarService, private http: HttpClient, private router: Router ) {}


  ngOnInit() {
    //this.checkLoggedIn();
    this.getAllActors();
    this.getAllGenres();
    console.log(localStorage.getItem('currentUser'))
    
    var value = localStorage.getItem('currentUser');
    if (value) {
      this.logoutButton = true;
    }
    else {
      this.logoutButton = false;
    }
  }

  checkLoggedIn() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);
        console.log(`The value of ${key}: ${value}`);
        if (value) {
          this.logoutButton = true;
        }
        else {
          this.logoutButton = false;
        }
      }
    }
  }

  logout() {
    this.logoutButton = false;
    localStorage.removeItem('currentUser');
  }


  getAllActors() {
    debugger
    this.moviesService.getAll('Actors').subscribe(data => {
      this.actors = data;
    });
  }

  getAllGenres() {
    this.moviesService.getAll('Genres').subscribe(data => {
      this.genres = data;
    });
  }

  onSearch() {
    // if (this.searchTerm) {
    //   debugger
    //   var movieExist = true;
    //   this.movies = this.movies.filter((movie) =>
    //   movieExist = movie.Title.toLowerCase().includes(this.searchTerm.toLowerCase())
    //   );
    //   if(movieExist){
    //     this.router.navigate(['/']); 
    //   }
    //   else{

    //   }

    // } else {
    //    // Error
    // }
  }

}
