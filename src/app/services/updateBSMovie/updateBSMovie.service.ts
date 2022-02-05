import { Injectable } from '@angular/core';
import { TheMovieDBService } from '../theMovieDB.service';
import { mergeMap, tap, switchMap, from } from 'rxjs';
import { routeMenuFilm } from 'src/app/shared/RouteEnum';
import { SharedService } from '../shared.service';
import { MoviePopular } from 'src/app/models/moviesModel';


@Injectable({
  providedIn: 'root'
})


export class UpdateBSMovieService {

  pages = from([1, 2, 3, 4]);

  constructor(private theMovieDbService: TheMovieDBService, private sharedService: SharedService) { }


  getMovie(){
    this.sharedService.setActualSection$.subscribe(item => {

      if (routeMenuFilm.POPOLARE === item) {
        this.theMovieDbService.getMoviePopular().pipe(
          tap(movies => {
            const movieWithSection = {
              ...movies,
              section: 'movie'
            }
            this.theMovieDbService.moviePopularBS.next(movieWithSection);
          }),
          switchMap(() => this.sharedService.setFilter$),
          tap(currentValue => this.sharedService.sortingMovie(currentValue))
        ).subscribe();
      };

      if (routeMenuFilm.ADESSO_IN_TV === item) {
        this.theMovieDbService.getTheater().pipe(
          tap(movies => {
            const movieWithSection = {
              ...movies,
              section: 'movie'
            }
            this.theMovieDbService.moviePopularBS.next(movieWithSection);
          }),
          switchMap(() => this.sharedService.setFilter$),
          tap(currentValue => this.sharedService.sortingMovie(currentValue))
        ).subscribe();
      };

      if (routeMenuFilm.IN_ARRIVO === item) {
        this.theMovieDbService.getUpcoming().pipe(
          tap(movies => {
            const movieWithSection = {
              ...movies,
              section: 'movie'
            }
            this.theMovieDbService.moviePopularBS.next(movieWithSection);
          }),
          switchMap(() => this.sharedService.setFilter$),
          tap(currentValue => this.sharedService.sortingMovie(currentValue))
        ).subscribe();
      };

      if (routeMenuFilm.PIU_VOTATI === item) {
        this.theMovieDbService.getMovieTopRated().pipe(
          tap(movies => {
            const movieWithSection = {
              ...movies,
              section: 'movie'
            }
            this.theMovieDbService.moviePopularBS.next(movieWithSection);
          }),
          switchMap(() => this.sharedService.setFilter$),
          tap(currentValue => this.sharedService.sortingMovie(currentValue))
        ).subscribe();
      };

    });

  }

  detectingChange(){
    this.sharedService.setActualSection$.subscribe(item => {

        if (routeMenuFilm.POPOLARE === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp1: any[] = [];
          this.pages.pipe(
            mergeMap((idx: number) => this.theMovieDbService.getMoviePopular(idx)),
            tap((movies: MoviePopular) => {
              movieObj = {
                ...movies,
                section: 'movie'
              }
              arrTemp1.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp1.sort((a, b) => b.popularity - a.popularity)
              };
              this.theMovieDbService.moviePopularBS.next(movieObj)
            }),
            switchMap(() => this.sharedService.setFilter$),
            tap(currentValue => console.log('currentValue', currentValue)),
            tap((currentValue: string) => this.sharedService.sortingMovie(currentValue))
          ).subscribe();
        };

        if (routeMenuFilm.ADESSO_IN_TV === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp2: any[] = [];
          this.pages.pipe(
            mergeMap((idx: number) => this.theMovieDbService.getTheater(idx)),
            tap((movies: MoviePopular) => {
              movieObj = {
                ...movies,
                section: 'movie'
              }
              arrTemp2.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp2.sort((a, b) => b.popularity - a.popularity)
              };
              this.theMovieDbService.moviePopularBS.next(movieObj)
            }),
            switchMap(() => this.sharedService.setFilter$),
            tap(currentValue => console.log('currentValue', currentValue)),
            tap((currentValue: string) => this.sharedService.sortingMovie(currentValue))
          ).subscribe();
        };

        if (routeMenuFilm.IN_ARRIVO === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp3: any[] = [];
          this.pages.pipe(
            mergeMap((idx: number) => this.theMovieDbService.getUpcoming(idx)),
            tap((movies: MoviePopular) => {
              movieObj = {
                ...movies,
                section: 'movie'
              }
              arrTemp3.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp3.sort((a, b) => b.popularity - a.popularity)
              };
              this.theMovieDbService.moviePopularBS.next(movieObj)
            }),
            switchMap(() => this.sharedService.setFilter$),
            tap(currentValue => console.log('currentValue', currentValue)),
            tap((currentValue: string) => this.sharedService.sortingMovie(currentValue))
          ).subscribe();
        };

        if (routeMenuFilm.PIU_VOTATI === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp3: any[] = [];
          this.pages.pipe(
            mergeMap((idx: number) => this.theMovieDbService.getMovieTopRated(idx)),
            tap((movies: MoviePopular) => {
              movieObj = {
                ...movies,
                section: 'movie'
              }
              arrTemp3.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp3.sort((a, b) => b.popularity - a.popularity)
              };
              this.theMovieDbService.moviePopularBS.next(movieObj)
            }),
            switchMap(() => this.sharedService.setFilter$),
            tap(currentValue => console.log('currentValue', currentValue)),
            tap((currentValue: string) => this.sharedService.sortingMovie(currentValue))
          ).subscribe();
        };

    });

  }
}
