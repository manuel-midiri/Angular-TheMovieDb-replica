import { ContainerVideoCardComponent } from './container-video-card/container-video-card.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { ContainerCardComponent } from './container-card/container-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { FooterComponent } from '../core/footer/footer.component';
import { MaterialModule } from '../material.module';
import { FilterComponent } from './filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    ContainerCardComponent,
    ContainerVideoCardComponent,
    HeaderSectionComponent,
    CardComponent,
    VideoCardComponent,
    FooterComponent,
    FilterComponent
  ],
  exports: [
    ContainerCardComponent,
    ContainerVideoCardComponent,
    HeaderSectionComponent,
    CardComponent,
    VideoCardComponent,
    FooterComponent,
    FilterComponent
  ]
})
export class SharedModule { }
