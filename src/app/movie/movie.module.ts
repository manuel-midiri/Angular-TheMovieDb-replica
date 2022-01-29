import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    SharedModule
  ],
  declarations: [
    MovieComponent,
    MovieDetailsComponent
  ]
})
export class MovieModule { }
