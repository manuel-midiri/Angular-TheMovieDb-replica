import { MoviePopular } from './../../models/moviesModel';
import { TheMovieDBService } from './../../services/theMovieDB.service';
import { routeMenuFilm, routeMenuMore, routeMenuPerson, routeMenuTv } from './../../shared/RouteEnum';
import { SharedService } from './../../services/shared.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { filter, from, mergeMap, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  screenWidth: any;
  menuFilm: any[] = [
    routeMenuFilm.POPOLARE,
    routeMenuFilm.ADESSO_IN_TV,
    routeMenuFilm.IN_ARRIVO,
    routeMenuFilm.PIU_VOTATI
  ];
  menuTV: string[] = [
    routeMenuTv.POPOLARI,
    routeMenuTv.OGGI_IN_ONDA,
    routeMenuTv.IN_TV,
    routeMenuTv.PIU_VOTATI,
  ];
  menuPerson: string[] = [
    routeMenuPerson.PERSONE_POPOLARI
  ];
  menuMore: string[] = [
    routeMenuMore.DISCUSSIONI,
    routeMenuMore.CLASSIFICA,
    routeMenuMore.SUPPORTO,
    routeMenuMore.API,
  ];
  chargeOthers: boolean = false;
  sectionActual: string = routeMenuFilm.POPOLARE;
  movieObj: MoviePopular = {} as MoviePopular;
  pages = from([1, 2, 3, 4]);

  constructor(private sharedService: SharedService, private theMovieDbService: TheMovieDBService) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    let arrTemp: any[] = [];
    if(routeMenuFilm.POPOLARE === this.sectionActual){
      this.theMovieDbService.getMoviePopular().subscribe(movies => {
        this.theMovieDbService.moviePopularBS.next(movies);
      });
    }

    //After clicked charge others movie
    //popular
    this.theMovieDbService.othersCharge$.pipe(
      filter(valueBoolean => valueBoolean === true && routeMenuFilm.POPOLARE === this.sectionActual),
      tap(() => arrTemp = []),
      switchMap(() => this.pages),
      mergeMap(idx => this.theMovieDbService.getMoviePopular(idx)),
      tap((movies: MoviePopular) => {
        this.movieObj = movies;
        arrTemp = [
          ...arrTemp,
          ...movies.results
        ];
        this.movieObj = {
          ...this.movieObj,
          results: arrTemp
        }
      }),
    ).subscribe(() => {
      this.theMovieDbService.moviePopularBS.next(this.movieObj);
      this.theMovieDbService.othersChargeBS.next(false);
    });
    //adesso in tv
    this.theMovieDbService.othersCharge$.pipe(
      filter(valueBoolean => valueBoolean === true && routeMenuFilm.ADESSO_IN_TV === this.sectionActual),
      tap(() => arrTemp = []),
      switchMap(() => this.pages),
      mergeMap(idx => this.theMovieDbService.getTheater(idx)),
      tap((movies: MoviePopular) => {
        this.movieObj = movies;
        arrTemp = [
          ...arrTemp,
          ...movies.results
        ];
        this.movieObj = {
          ...this.movieObj,
          results: arrTemp
        }
      }),
    ).subscribe(() => {
      this.theMovieDbService.moviePopularBS.next(this.movieObj);
      this.theMovieDbService.othersChargeBS.next(false);
    });
    //upcoming
    this.theMovieDbService.othersCharge$.pipe(
      filter(valueBoolean => valueBoolean === true && routeMenuFilm.IN_ARRIVO === this.sectionActual),
      tap(() => arrTemp = []),
      switchMap(() => this.pages),
      mergeMap(idx => this.theMovieDbService.getUpcoming(idx)),
      tap((movies: MoviePopular) => {
        this.movieObj = movies;
        arrTemp = [
          ...arrTemp,
          ...movies.results
        ];
        this.movieObj = {
          ...this.movieObj,
          results: arrTemp
        }
      }),
    ).subscribe(() => {
      this.theMovieDbService.moviePopularBS.next(this.movieObj);
      this.theMovieDbService.othersChargeBS.next(false);
    });
    //adesso in tv
    this.theMovieDbService.othersCharge$.pipe(
      filter(valueBoolean => valueBoolean === true && routeMenuFilm.PIU_VOTATI === this.sectionActual),
      tap(() => arrTemp = []),
      switchMap(() => this.pages),
      mergeMap(idx => this.theMovieDbService.getMovieTopRated(idx)),
      tap((movies: MoviePopular) => {
        this.movieObj = movies;
        arrTemp = [
          ...arrTemp,
          ...movies.results
        ];
        this.movieObj = {
          ...this.movieObj,
          results: arrTemp
        }
      }),
    ).subscribe(() => {
      this.theMovieDbService.moviePopularBS.next(this.movieObj);
      this.theMovieDbService.othersChargeBS.next(false);
    });
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
    this.sectionActual = item;
    console.log('this.sectionActual getMovie', this.sectionActual);

    if (routeMenuFilm.POPOLARE === item) {
      this.theMovieDbService.getMoviePopular().subscribe(movies => {
        this.theMovieDbService.moviePopularBS.next(movies);
      });
    }
    if (routeMenuFilm.ADESSO_IN_TV === item) {
      this.theMovieDbService.getTheater().subscribe(movies => {
        this.theMovieDbService.moviePopularBS.next(movies);
      });
    }
    if (routeMenuFilm.IN_ARRIVO === item) {
      this.theMovieDbService.getUpcoming().subscribe(movies => {
        this.theMovieDbService.moviePopularBS.next(movies);
      });
    }
    if (routeMenuFilm.PIU_VOTATI === item) {
      this.theMovieDbService.getMovieTopRated().subscribe(movies => {
        this.theMovieDbService.moviePopularBS.next(movies);
      });
    }
  }

}
