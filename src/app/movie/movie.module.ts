import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule
  ],
  declarations: [MovieComponent]
})
export class MovieModule { }
