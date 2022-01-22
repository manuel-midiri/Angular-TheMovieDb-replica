import { ContainerVideoCardComponent } from './container-video-card/container-video-card.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ContainerCardComponent } from './container-card/container-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { VideoCardComponent } from './video-card/video-card.component';
import { FooterComponent } from '../core/footer/footer.component';



@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule
  ],
  declarations: [
    ContainerCardComponent,
    ContainerVideoCardComponent,
    HeaderSectionComponent,
    CardComponent,
    VideoCardComponent,
    FooterComponent
  ],
  exports: [
    ContainerCardComponent,
    ContainerVideoCardComponent,
    HeaderSectionComponent,
    CardComponent,
    VideoCardComponent,
    FooterComponent
  ]
})
export class SharedModule { }
