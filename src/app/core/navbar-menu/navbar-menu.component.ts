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
  sectionActual: string = '';
  movieObj: MoviePopular = {} as MoviePopular;
  pages = from([1, 2, 3, 4]);

  constructor(private sharedService: SharedService, private theMovieDbService: TheMovieDBService) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    let arrTemp: any[] = [];

    this.theMovieDbService.othersCharge$.pipe(
      filter(valueBoolean => valueBoolean === true && routeMenuFilm.POPOLARE === this.sectionActual),
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
      })
    ).subscribe(() => this.theMovieDbService.moviePopularBS.next(this.movieObj));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  toggleDrawer() {
    this.sharedService.toggle();
  }

  getMovie(item: string){
    this.sectionActual = item;
    if (routeMenuFilm.POPOLARE === item) {
      this.theMovieDbService.getMoviePopular().subscribe(movies => {
        console.log('movies', movies);
        this.theMovieDbService.moviePopularBS.next(movies);
      });
    }
  }

}
