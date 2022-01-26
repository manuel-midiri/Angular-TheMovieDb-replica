import { Injectable } from '@angular/core';
import { TheMovieDBService } from '../theMovieDB.service';
import { from, mergeMap, tap } from 'rxjs';
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
        this.theMovieDbService.getMoviePopular().subscribe(movies => {
          let movie = movies;
          movie = {
            ...movie,
            results: movie.results.sort((a, b) => b.popularity - a.popularity)
          }
          this.theMovieDbService.moviePopularBS.next(movie);
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
        });
      }
    })
  }

  detectingChange(){
    this.sharedService.setActualSection$.subscribe(item => {
        if (routeMenuFilm.POPOLARE === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp1: any[] = [];
          this.pages.pipe(
            mergeMap(idx => this.theMovieDbService.getMoviePopular(idx)),
            tap((movies: MoviePopular) => {
              movieObj = movies;
              arrTemp1.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp1.sort((a, b) => b.popularity - a.popularity)
              }
            })
          ).subscribe(() => this.theMovieDbService.moviePopularBS.next(movieObj));
        }
        if (routeMenuFilm.ADESSO_IN_TV === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp2: any[] = [];
          this.pages.pipe(
            mergeMap(idx => this.theMovieDbService.getTheater(idx)),
            tap((movies: MoviePopular) => {
              movieObj = movies;
              arrTemp2.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp2.sort((a, b) => b.popularity - a.popularity)
              }
            })
          ).subscribe(() => this.theMovieDbService.moviePopularBS.next(movieObj));
        }
        if (routeMenuFilm.IN_ARRIVO === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp3: any[] = [];
          this.pages.pipe(
            mergeMap(idx => this.theMovieDbService.getUpcoming(idx)),
            tap((movies: MoviePopular) => {
              movieObj = movies;
              arrTemp3.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp3.sort((a, b) => b.popularity - a.popularity)
              }
            })
          ).subscribe(() => this.theMovieDbService.moviePopularBS.next(movieObj));
        }
        if (routeMenuFilm.PIU_VOTATI === item) {
        //popular
          let movieObj: MoviePopular = {} as MoviePopular;
          let arrTemp3: any[] = [];
          this.pages.pipe(
            mergeMap(idx => this.theMovieDbService.getMovieTopRated(idx)),
            tap((movies: MoviePopular) => {
              movieObj = movies;
              arrTemp3.push(...movies.results)
              movieObj = {
                ...movieObj,
                results: arrTemp3.sort((a, b) => b.popularity - a.popularity)
              }
            })
          ).subscribe(() => this.theMovieDbService.moviePopularBS.next(movieObj));
        }
    })
  }
}
