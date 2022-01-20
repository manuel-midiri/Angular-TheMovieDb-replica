import { TheMovieDBService } from './../services/theMovieDB.service';
import { Component, OnInit } from '@angular/core';
import { MoviePopular } from '../models/moviesModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviePopular: MoviePopular = {} as MoviePopular;

  constructor(private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {

    this.theMovieDBService.moviePopular$.subscribe(movies => this.moviePopular = movies);

  }

}
