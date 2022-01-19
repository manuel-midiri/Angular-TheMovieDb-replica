import { HeaderSectionComponent } from './header-section/header-section.component';
import { ContainerCardComponent } from './container-card/container-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [
    ContainerCardComponent,
    HeaderSectionComponent,
    CardComponent
  ],
  exports: [
    ContainerCardComponent,
    HeaderSectionComponent,
    CardComponent
  ]
})
export class SharedModule { }
