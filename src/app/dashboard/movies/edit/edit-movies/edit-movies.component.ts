import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/dashboard/movies.service';
import { Movies } from 'src/global/shared-clasess';
import { LoginService } from 'src/app/login/login.service';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.scss'],
})
export class EditMovieComponent implements OnInit {

  movie:              Movies = new Movies();
  showSuccessMessage: boolean = false;
  imageFile:          File | null = null; // To store the uploaded image file


  selectedGenreId:    number;
  selectedDirectorId: number;

  constructor(
    public loginService: LoginService,
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService<any>
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const movieId = +params['id'];
      this.moviesService.getOne('Movies', movieId).subscribe((movie) => {
        this.movie = movie;
      });
    });
  }

  // Function to handle image upload
  onImageUpload(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.imageFile = files[0];
    }
  }

  updateMovie() {
    // Create a FormData object to send the movie details and image
    const formData = new FormData();
    debugger
    formData.append('Title', this.movie.Title);
    formData.append('GenreId', this.movie.GenreId.toString());
    formData.append('DirectorId', this.movie.DirectorId.toString());
    formData.append('ReleaseYear', this.movie.ReleaseYear.toString());

    // Add the image file if it's selected
    if (this.imageFile) {
      formData.append('Image', this.imageFile, this.imageFile.name);
    }

    this.moviesService.update('Movies', this.movie.ID, formData).subscribe(() => {
      this.showSuccessMessage = true;
    });
  }
}
