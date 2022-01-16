import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvComponent } from './tv.component';
import { TvRoutingModule } from './tv-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TvRoutingModule
  ],
  declarations: [TvComponent]
})
export class TvModule { }
