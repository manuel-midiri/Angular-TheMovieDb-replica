import { TheMovieDBService } from './../../services/theMovieDB.service';
import { Component, Input, OnInit } from '@angular/core';
import { routeSection } from '../RouteEnum';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  @Input() title: string = '';
  @Input() listMenu: string[] = [];
  @Input() trailer: boolean = false;
  selectedItem!: string;

  constructor(private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.theMovieDBService.getMoviePopular().subscribe(movie => {
      this.theMovieDBService.moviePopularBS.next(movie);
      this.theMovieDBService.movieTrailerBS.next(movie);
    });
    this.theMovieDBService.getMovieTopRated().subscribe(movieFree => this.theMovieDBService.movieFreeVisionBS.next(movieFree));
    this.theMovieDBService.getTheater().subscribe(movieTreand => this.theMovieDBService.movieMovieTrendBS.next(movieTreand));
    if (this.listMenu) {
      this.selectedItem = this.listMenu[0];
    };
  }

  onSelectSection(item: any){
    this.selectedItem = item;
    if(routeSection.STREAMING === item){
      this.theMovieDBService.getMoviePopular().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
    };
    if(routeSection.IN_TV === item){
      this.theMovieDBService.getTvPopular().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
    };
    if(routeSection.A_NOLEGGIO === item){
      this.theMovieDBService.getTvTopRated().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
    };
    if(routeSection.AL_CINEMA === item){
      this.theMovieDBService.getTheater().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
    };
    if(routeSection.FILMS === item){
      this.theMovieDBService.getMovieTopRated().subscribe(movie => this.theMovieDBService.movieFreeVisionBS.next(movie));
    };
    if(routeSection.SERIE_TV === item){
      this.theMovieDBService.getTvTopRated().subscribe(movie => this.theMovieDBService.movieFreeVisionBS.next(movie));
    };
    if(routeSection.STREAMING_TRAILER === item){
      this.theMovieDBService.getMoviePopular().subscribe(movie => this.theMovieDBService.movieTrailerBS.next(movie));
    };
    if(routeSection.IN_TV_TRAILER === item){
      this.theMovieDBService.getTvPopular().subscribe(movie => this.theMovieDBService.movieTrailerBS.next(movie));
    };
    if(routeSection.A_NOLEGGIO_TRAILER === item){
      this.theMovieDBService.getTvTopRated().subscribe(movie => this.theMovieDBService.movieTrailerBS.next(movie));
    };
    if(routeSection.AL_CINEMA_TRAILER === item){
      this.theMovieDBService.getTheater().subscribe(movie => this.theMovieDBService.movieTrailerBS.next(movie));
    };
    if(routeSection.OGGI === item){
      this.theMovieDBService.getTheater().subscribe(movie => this.theMovieDBService.movieMovieTrendBS.next(movie));
    };
    if(routeSection.QUESTA_SETTIMANA === item){
      this.theMovieDBService.getTvTopRated().subscribe(movie => this.theMovieDBService.movieMovieTrendBS.next(movie));
    };
  }

}
