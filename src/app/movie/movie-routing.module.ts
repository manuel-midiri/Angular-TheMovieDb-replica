import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  {path: '', component: MovieComponent, children: [
    {path: 'now_playing', component: MovieComponent},
    {path: 'upcoming', component: MovieComponent},
    {path: 'top-rated', component: MovieComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
