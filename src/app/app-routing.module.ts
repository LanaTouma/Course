import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMovieComponent } from './dashboard/movies/edit/edit-movies/edit-movies.component';
import { MoviesComponent } from './dashboard/movies/view/view-movies.component';
import { AddMoviesComponent } from './dashboard/movies/add/add-movies/add-movies.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './dashboard/movies/details/details.component';
import { ActorDetailsComponent } from './dashboard/actors/actor-details/actor-details.component';
import { ErrorPageComponent } from './dashboard/error-page/error-page.component';

const routes: Routes = [
  { path: ''                    , component: MoviesComponent }, 
  { path: 'edit-movie/:id'      , component: EditMovieComponent },
  { path :'add-movie'           , component: AddMoviesComponent},
  { path :'login'               , component: LoginComponent},
  { path: 'movie-details/:id'   , component: DetailsComponent },
  { path: 'actor-details/:id'   , component: ActorDetailsComponent },
  { path: '**'                  , component: ErrorPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
