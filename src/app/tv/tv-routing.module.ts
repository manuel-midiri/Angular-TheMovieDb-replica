import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvComponent } from './tv.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';

const routes: Routes = [
  {path: '', component: TvComponent},
  {path: ':id', component: TvDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvRoutingModule { }
