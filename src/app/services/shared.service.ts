import { TheMovieDBService } from './theMovieDB.service';
import { MoviePopular } from './../models/moviesModel';
import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { routeMenuFilm } from '../shared/RouteEnum';
import { filterSelection } from '../shared/FilterEmun';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

    private drawer: MatDrawer = {} as MatDrawer;
    setActualSectionBS: BehaviorSubject<string> = new BehaviorSubject<string>(routeMenuFilm.POPOLARE);
    setActualSection$: Observable<string> = this.setActualSectionBS.asObservable();

    setBtnVisibleBS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    setBtnVisible$: Observable<boolean> = this.setBtnVisibleBS.asObservable();

    othersChargeBS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    othersCharge$: Observable<boolean> = this.othersChargeBS.asObservable();

    setFilterBS: BehaviorSubject<string> = new BehaviorSubject<string>(filterSelection.POPOLARITA_DESC);
    setFilter$: Observable<string> = this.setFilterBS.asObservable();


    constructor(private router: Router, private theMovieService: TheMovieDBService) { }

    setDrawer(drawer: MatDrawer): void {
        this.drawer = drawer;
    }

    toggle(): void {
        this.drawer.toggle();
    }

    getActualSection(): void {
      this.router.events.pipe(
        tap(() => this.othersChargeBS.next(false)),
        filter((navigation): navigation is NavigationEnd => navigation instanceof NavigationEnd),
        tap(route => this.setActualSectionBS.next(route.url)),
      ).subscribe();
    }

    sortingMovie(value: string){
      let sortedMovie: MoviePopular = {} as MoviePopular;

      if (filterSelection.POPOLARITA_DESC === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => b.popularity - a.popularity);
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };

      if (filterSelection.POPOLARITA_ASC === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => a.popularity - b.popularity);
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };

      if (filterSelection.VALUTAZIONE_DESC === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => b.vote_average - a.vote_average);
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };

      if (filterSelection.VALUTAZIONE_ASC === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => a.vote_average - b.vote_average);
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };

      if (filterSelection.DATA_RILASCIO_DESC === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => (b.release_date).localeCompare(a.release_date));
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };

      if (filterSelection.DATA_RILASCIO_ASC === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => (a.release_date).localeCompare(b.release_date));
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };

      if (filterSelection.TITOLO_A_Z === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => (a.title).localeCompare(b.title));
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };

      if (filterSelection.TITOLO_Z_A === value) {
        this.theMovieService.moviePopular$.subscribe(movies => sortedMovie = movies);
        sortedMovie.results.sort((a, b) => (b.title).localeCompare(a.title));
        this.theMovieService.moviePopularBS.next(sortedMovie);
      };


    }

}
