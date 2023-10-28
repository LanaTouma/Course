import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/dashboard/movies.service';
import { Directors, Genres, Movies } from 'src/global/shared-clasess';

@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.scss']
})
export class AddMoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService<any>,private router: Router) { }

  selectedGenreId:    number;
  selectedDirectorId: number;

  movies:             Movies;
  genres:             Genres[];
  directors:          Directors[];

  ngOnInit() {
   this.getAllGenres();
   this.getAllDirectors();
  }

  onSubmit() {
    // Handle form submission here
    console.log(this.movies);
    // You can send the data to a backend API or perform any other necessary action
  }

  onImageUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      // Handle image upload here
      //this.movies.ImagePath = inputElement.files[0];
    }
  }

  getAllGenres() {
    this.moviesService.getAll('Genres').subscribe(data => {
      this.genres = data;
    });
  }

  getAllDirectors() {
    this.moviesService.getAll('Directors').subscribe(data => {
      this.directors = data;
    });
  }

}
