import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, tap } from 'rxjs';
import { Cast, HeaderModel } from 'src/app/models/movieByIdModel';
import { TvById } from 'src/app/models/tvByIdModel';
import { TheMovieDBService } from 'src/app/services/theMovieDB.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.scss']
})
export class TvDetailsComponent implements OnInit {

  tvDetailID: any;
  tvDetailObj: TvById = {} as TvById;
  tvHeader: HeaderModel = {} as HeaderModel;
  tvCast: Cast[] = [];

  constructor(private router: ActivatedRoute, private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.tvDetailID = this.router.snapshot.paramMap.get('id');
    forkJoin({
      tvById: this.theMovieDBService.getTvByID(this.tvDetailID),
      credits: this.theMovieDBService.getTvCredits(this.tvDetailID)
    }).pipe(
      tap(tv => console.log('tv', tv)),
      tap(tvDetail => this.tvDetailObj = tvDetail.tvById),
      tap(tvHeader => {
        this.tvHeader = {
          adult: tvHeader.tvById.adult,
          backdrop_path:`https://image.tmdb.org/t/p/original/${tvHeader.tvById.backdrop_path}`,
          genres: tvHeader.tvById.genres,
          overview: tvHeader.tvById.overview,
          poster_path: `https://image.tmdb.org/t/p/original/${tvHeader.tvById.poster_path}`,
          tagline: tvHeader.tvById.tagline,
          title: tvHeader.tvById.name,
          vote_average: tvHeader.tvById.vote_average,
          release_date: tvHeader.tvById.last_air_date,
          runtime: tvHeader.tvById.episode_run_time[0],
          crew: [...new Map(tvHeader.credits.crew.map(people => [people['id'], people])).values()]
        };
        this.tvCast = tvHeader.credits.cast;
      })
    ).subscribe();
  }

}
