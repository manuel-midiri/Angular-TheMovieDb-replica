import { Injectable } from '@angular/core';
import { MoviePopular, ResultMoviePopular } from 'src/app/models/moviesModel';
import { TheMovieDBService } from '../theMovieDB.service';
import { filter, mergeMap, switchMap, tap, BehaviorSubject, from, Observable } from 'rxjs';
import { routeMenuFilm } from 'src/app/shared/RouteEnum';


@Injectable({
  providedIn: 'root'
})


export class UpdateBSMovieService {

  pages = from([1, 2, 3, 4]);
  setActualSectionBS: BehaviorSubject<string> = new BehaviorSubject<string>(routeMenuFilm.POPOLARE);
  setActualSection$: Observable<string> = this.setActualSectionBS.asObservable();


  constructor(private theMovieDbService: TheMovieDBService) { }

  detectingChange(sectionActual: string){

      if (routeMenuFilm.POPOLARE === sectionActual) {
      console.log('POPOLARE')
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
        ).subscribe(() => {
          this.theMovieDbService.moviePopularBS.next(movieObj);
          this.theMovieDbService.othersChargeBS.next(false);
        });
      }
      if (routeMenuFilm.ADESSO_IN_TV === sectionActual) {
      console.log('ADESSO_IN_TV')
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
        ).subscribe(() => {
          this.theMovieDbService.moviePopularBS.next(movieObj);
          this.theMovieDbService.othersChargeBS.next(false);
        });
      }
      if (routeMenuFilm.IN_ARRIVO === sectionActual) {
      console.log('IN_ARRIVO')
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
        ).subscribe(() => {
          this.theMovieDbService.moviePopularBS.next(movieObj);
          this.theMovieDbService.othersChargeBS.next(false);
        });
      }
      if (routeMenuFilm.PIU_VOTATI === sectionActual) {
      console.log('PIU_VOTATI')
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
        ).subscribe(() => {
          this.theMovieDbService.moviePopularBS.next(movieObj);
          this.theMovieDbService.othersChargeBS.next(false);
        });
      }

    }




}
