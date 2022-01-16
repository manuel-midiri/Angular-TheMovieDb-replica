import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonPageComponent } from './person-page.component';
import { PersonPageRoutingModule } from './person-route.module';

@NgModule({
  imports: [
    CommonModule,
    PersonPageRoutingModule
  ],
  declarations: [PersonPageComponent]
})
export class PersonPageModule { }
