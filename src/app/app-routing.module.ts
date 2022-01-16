import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'movie', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule)},
  {path: 'tv', loadChildren: () => import('./tv/tv.module').then(m => m.TvModule)},
  {path: 'person', loadChildren: () => import('./person-page/person-page.module').then(m => m.PersonPageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
