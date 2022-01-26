import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { MaterialModule } from '../material.module';
import { FilterComponent } from './components/filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    MovieRoutingModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule,
    ScrollingModule
  ],
  declarations: [
    MovieComponent,
    FilterComponent
  ]
})
export class MovieModule { }
