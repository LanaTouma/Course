import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  loader:             boolean = true;

  genres:             Genres[];
  directors:          Directors[];

  movies:             Movies = new Movies();

  ngOnInit() {
   this.getAllGenres();
   this.getAllDirectors();
  }

  onSubmit(form: NgForm) {
    
    if (form.valid) {
      const newMovie: Movies = new Movies();
      debugger
      newMovie.Title = this.movies.Title;
      newMovie.ReleaseYear = this.movies.ReleaseYear;
      newMovie.ImagePath = this.movies.ImagePath;
  
      const selectedGenre = this.genres.find(genres => genres.ID == this.selectedGenreId);
      if (selectedGenre) {
        newMovie.GenreId = selectedGenre.ID;
        newMovie.Genre = selectedGenre.Name;
      } else {
        console.log('Selected genre not found.');
        return;
      }
  
      const selectedDirector = this.directors.find(director => director.Id == this.selectedDirectorId);
      if (selectedDirector) {
        newMovie.DirectorId = selectedDirector.Id;
        newMovie.Director = selectedDirector.FullName;
      } else {
        console.log('Selected director not found.');
        return;
      }
  
      console.log('New Movie:', newMovie);

      this.moviesService.create('Movies', newMovie).subscribe(
        (response) => {
          this.loader = false;
          console.log('New movie added:', response);
        },
        (error) => {
          this.loader = false;
          console.error('Error while adding a new movie:', error);
        }
      );
    } else {
      //form.submitted = true;
    }
  
  }

  onImageUpload(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {

      //this.movies.ImagePath = inputElement.files[0];
    }
  }

  getAllGenres() {
    this.moviesService.getAll('Genres').subscribe(data => {
      this.genres = data;
      this.loader = false;
    });
  }

  getAllDirectors() {
    this.moviesService.getAll('Directors').subscribe(data => {
      this.directors = data;
      this.loader = false;
    });
  }

}
