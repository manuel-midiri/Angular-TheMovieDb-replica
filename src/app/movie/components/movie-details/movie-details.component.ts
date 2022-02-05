import { Cast, HeaderModel } from 'src/app/models/movieByIdModel';
import { tap, forkJoin } from 'rxjs';
import { TheMovieDBService } from './../../../services/theMovieDB.service';
import { MovieById } from './../../../models/movieByIdModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetailID: any;
  movieDetailObj: MovieById = {} as MovieById;
  movieHeader: HeaderModel = {} as HeaderModel;
  movieCast: Cast[] = [];

  constructor(private router: ActivatedRoute, private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.movieDetailID = this.router.snapshot.paramMap.get('id');
    forkJoin({
      movieById: this.theMovieDBService.getMovieByID(this.movieDetailID),
      credits: this.theMovieDBService.getMovieCredits(this.movieDetailID)
    }).pipe(
      tap(movieDetail => this.movieDetailObj = movieDetail.movieById),
      tap(movieHeader => {
        this.movieHeader = {
          adult: movieHeader.movieById.adult,
          backdrop_path:`https://image.tmdb.org/t/p/original/${movieHeader.movieById.backdrop_path}`,
          genres: movieHeader.movieById.genres,
          overview: movieHeader.movieById.overview,
          poster_path: `https://image.tmdb.org/t/p/original/${movieHeader.movieById.poster_path}`,
          tagline: movieHeader.movieById.tagline,
          title: movieHeader.movieById.title,
          vote_average: movieHeader.movieById.vote_average,
          release_date: movieHeader.movieById.release_date,
          runtime: movieHeader.movieById.runtime,
          crew: [...new Map(movieHeader.credits.crew.map(people => [people['id'], people])).values()]
        };
        this.movieCast = movieHeader.credits.cast;
      })
    ).subscribe();
  }

}
