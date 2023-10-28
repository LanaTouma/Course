import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/dashboard/movies.service';
import { Movies } from 'src/global/shared-clasess';



@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.scss']
})

export class EditMovieComponent implements OnInit {
  movie: Movies;
  showSuccessMessage: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute, // Add the ActivatedRoute to the constructor
    private moviesService: MoviesService<any> // Make sure to use 'any' type for generic
  ) {}

    ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        const movieId = +params['id'];
        this.moviesService.getOne('Movies', movieId).subscribe(movie => {
          this.movie = movie;
        });
      });
    }
  
    updateMovie() {
      this.moviesService.update('Movies', this.movie.ID, this.movie).subscribe(() => {
        this.showSuccessMessage = true; 
        
      });
    }
  }
  