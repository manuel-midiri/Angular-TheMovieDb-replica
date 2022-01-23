import { TheMovieDBService } from './../../services/theMovieDB.service';
import { routeMenuFilm } from './../../shared/RouteEnum';
import { SharedService } from './../../services/shared.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { filter, switchMap, tap } from 'rxjs';
import { UpdateBSMovieService } from 'src/app/services/updateBSMovie/updateBSMovie.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  screenWidth: any;

  constructor(
    private sharedService: SharedService,
    private theMovieDbService: TheMovieDBService,
    private updateBSMovie: UpdateBSMovieService
    ) { }

  ngOnInit() {

    this.screenWidth = window.innerWidth;
    this.theMovieDbService.othersCharge$.pipe(
      filter(value => value === true),
      switchMap(() => this.updateBSMovie.setActualSection$),
      tap(actualSection => this.updateBSMovie.detectingChange(actualSection)),
    ).subscribe(() => this.theMovieDbService.othersChargeBS.next(false));

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  toggleDrawer() {
    this.sharedService.toggle();
  }

  //After clicked list menu
  getMovie(item: string){
    this.updateBSMovie.setActualSectionBS.next(item);
    if (routeMenuFilm.POPOLARE === item) {
      this.theMovieDbService.getMoviePopular().subscribe(movies => {
        let movie = movies;
        movie = {
          ...movie,
          results: movie.results.sort((a, b) => b.popularity - a.popularity)
        }
        this.theMovieDbService.moviePopularBS.next(movie);
        this.theMovieDbService.othersChargeBS.next(false);
      });
    }
    if (routeMenuFilm.ADESSO_IN_TV === item) {
      this.theMovieDbService.getTheater().subscribe(movies => {
        let movie = movies;
        movie = {
          ...movie,
          results: movie.results.sort((a, b) => b.popularity - a.popularity)
        }
        this.theMovieDbService.moviePopularBS.next(movie);
        this.theMovieDbService.othersChargeBS.next(false);
      });
    }
    if (routeMenuFilm.IN_ARRIVO === item) {
      this.theMovieDbService.getUpcoming().subscribe(movies => {
        let movie = movies;
        movie = {
          ...movie,
          results: movie.results.sort((a, b) => b.popularity - a.popularity)
        }
        this.theMovieDbService.moviePopularBS.next(movie);
        this.theMovieDbService.othersChargeBS.next(false);
      });
    }
    if (routeMenuFilm.PIU_VOTATI === item) {
      this.theMovieDbService.getMovieTopRated().subscribe(movies => {
        let movie = movies;
        movie = {
          ...movie,
          results: movie.results.sort((a, b) => b.popularity - a.popularity)
        }
        this.theMovieDbService.moviePopularBS.next(movie);
        this.theMovieDbService.othersChargeBS.next(false);
      });
    }
  }

}
