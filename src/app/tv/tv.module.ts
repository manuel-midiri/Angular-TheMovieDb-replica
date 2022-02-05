import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvComponent } from './tv.component';
import { TvRoutingModule } from './tv-routing.module';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    TvRoutingModule,
    SharedModule
  ],
  declarations: [
    TvComponent,
    TvDetailsComponent
  ]
})
export class TvModule { }
