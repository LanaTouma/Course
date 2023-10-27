import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService<any>) { }

  items: any[] = [];
  selectedItem: any;
  newItem: any;
  updatedItem: any;

  ngOnInit() {
    this.getAllItems();
    this.getOneItem(5);
  }

  //Add the lazy loading concept here.... please :)
  getAllItems() {
    this.getAllGenres();
    this.getAllMovies();
    this.getAllActors();
    this.getAllActors();
  }


  /** Get all items section **/

  getAllGenres() {
    this.moviesService.getAll('Genres').subscribe(data => {
      this.items = data;
      console.log(this.items)
    });
  }

  getAllMovies() {
    this.moviesService.getAll('Movies').subscribe(data => {
      this.items = data;
      console.log(this.items)
    });
  }

  getAllDirectors() {
    this.moviesService.getAll('Directors').subscribe(data => {
      this.items = data;
      console.log(this.items)
    });
  }

  getAllActors() {
    this.moviesService.getAll('Actors').subscribe(data => {
      this.items = data;
      console.log(this.items)
    });
  }

  /** Get one items section **/

  getOneItem(id: any) {
    this.moviesService.getOne('MovieActors', id).subscribe(data => {
      this.selectedItem = data;
      console.log(this.selectedItem)
    });
  }

  /** Create one items section **/

  createItem() {
    this.moviesService.create('', this.newItem).subscribe(data => {
      this.getAllItems();
    });
  }

  /** Update one items section **/

  updateItem(id: any) {
    this.moviesService.update('', id, this.updatedItem).subscribe(data => {
      this.getAllItems();
    });
  }

  /** Delete one items section **/

  deleteItem(id: any) {
    this.moviesService.delete('', id).subscribe(() => {
      this.getAllItems();
    });
  }


}
