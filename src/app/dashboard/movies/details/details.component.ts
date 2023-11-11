import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from './details.service';
import { MoviesService } from '../../movies.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  movie:          any;
  movieId:        any;
  isLoading:      boolean = true;

  constructor(private route: ActivatedRoute, private movieDeatilsService: DetailsService, private movieService: MoviesService<any>) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe((params) => {
      this.movieId = params.get('id');
      this.loadMovieDetails(this.movieId);
    });

    this.getAllActors();
    console.log(this.getAllActors());

  }

  loadMovieDetails(id: string) {
    debugger
    this.movieService.getOne('Movies', id).subscribe((data) => {
      this.movie      = data;
      this.isLoading  = false;
    });
  }

  getAllActors() {
    this.movieService.getAll('MovieActors').subscribe(data => {
      this.movie = data;
      console.log(this.movie)
    });
  }

}
