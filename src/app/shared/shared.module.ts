import { HeaderDetailComponent } from './header-detail/header-detail.component';
import { RouterModule } from '@angular/router';
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
import { ToolbarDetailComponent } from './toolbar-detail/toolbar-detail.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    ContainerCardComponent,
    ContainerVideoCardComponent,
    HeaderSectionComponent,
    CardComponent,
    VideoCardComponent,
    FooterComponent,
    FilterComponent,
    HeaderDetailComponent,
    ToolbarDetailComponent
  ],
  exports: [
    ContainerCardComponent,
    ContainerVideoCardComponent,
    HeaderSectionComponent,
    CardComponent,
    VideoCardComponent,
    FooterComponent,
    FilterComponent,
    HeaderDetailComponent,
    ToolbarDetailComponent
  ]
})
export class SharedModule { }
