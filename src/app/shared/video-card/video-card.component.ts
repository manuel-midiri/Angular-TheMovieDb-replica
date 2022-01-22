import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/moviesModel';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  @Input() objItems: any;
  objMovie: Movie = {} as Movie;

  constructor() { }

  ngOnInit() {
    this.objMovie = {
      id: this.objItems.id,
      title: this.objItems.title || this.objItems.name,
      image: `https://image.tmdb.org/t/p/original/${this.objItems.backdrop_path}`,
      date: this.objItems.release_date || this.objItems.first_air_date,
      vote: this.objItems.vote_average
    }
  }

}
