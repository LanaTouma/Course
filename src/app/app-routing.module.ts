import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMovieComponent } from './dashboard/movies/edit/edit-movies/edit-movies.component';
import { MoviesComponent } from './dashboard/movies/view/view-movies.component';
const routes: Routes = [
  { path: '', component: MoviesComponent }, 
  { path: 'edit-movie/:id', component: EditMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
