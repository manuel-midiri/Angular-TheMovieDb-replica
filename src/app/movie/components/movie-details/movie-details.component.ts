import { TheMovieDBService } from './../../../services/theMovieDB.service';
import { MovieById } from './../../../models/movieByIdModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetailID: any;
  movieDetailObj: MovieById = {} as MovieById;

  constructor(private router: ActivatedRoute, private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.movieDetailID = this.router.snapshot.paramMap.get('id');
    this.theMovieDBService.getMovieByID(this.movieDetailID).subscribe(movieById => this.movieDetailObj = movieById);
  }

}
