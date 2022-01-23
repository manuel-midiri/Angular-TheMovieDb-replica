import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MaterialModule } from '../material.module';
import { FilterComponent } from './components/filter/filter.component';
import { CardComponent } from '../shared/card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    MovieComponent,
    FilterComponent
  ]
})
export class MovieModule { }
