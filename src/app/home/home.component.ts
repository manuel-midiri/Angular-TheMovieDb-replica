import { TheMovieDBService } from './../services/theMovieDB.service';
import { Component, OnInit } from '@angular/core';
import { MoviePopular, MovieTopRated } from '../models/moviesModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviePopular: MoviePopular = {} as MoviePopular;
  movieTrailer: MoviePopular[] = [];
  movieFree: MovieTopRated = {} as MovieTopRated;
  movieTreand: MovieTopRated = {} as MovieTopRated;
  listMenuPopular: string[] = ['Streaming', 'In TV', 'A noleggio', 'Al cinema'];
  listMenuTrailer: string[] = ['Streaming ', 'In TV ', 'A noleggio ', 'Al cinema '];
  listMenuFree: string[] = ['Films', 'Serie TV'];
  listMenuTrend: string[] = ['Oggi', 'Questa settimana'];
  imageBackgroundSection: string = '';


  constructor(private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.theMovieDBService.moviePopular$.subscribe(movies => this.moviePopular = movies);
    this.theMovieDBService.movieTrailer$.subscribe(movies => this.movieTrailer = movies.results);
    this.theMovieDBService.movieFreeVision$.subscribe(movieFree => this.movieFree = movieFree);
    this.theMovieDBService.movieMovieTrend$.subscribe(movieTreand => this.movieTreand = movieTreand);
  }

  outputImage(imageUrl: string){
    this.imageBackgroundSection = `https://image.tmdb.org/t/p/original${imageUrl}`;
  }

}
