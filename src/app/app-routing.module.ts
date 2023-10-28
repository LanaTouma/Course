import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './dashboard/movies/view/view-movies.component';
import { AddMoviesModule } from './dashboard/movies/add/add-movies/add-movies.module';

const routes: Routes = [
  { path: 'add', component: AddMoviesModule }, // Default route, empty path
  { path: 'view', component: MoviesComponent }, // Route to your view page
  { path: 'add', component: AddMoviesModule },   // Route for the "add" component
  { path: '**', redirectTo: '' }, // Erro Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
