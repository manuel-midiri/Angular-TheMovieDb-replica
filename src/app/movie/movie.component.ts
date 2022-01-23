import { Component, OnInit } from '@angular/core';
import { TheMovieDBService } from '../services/theMovieDB.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  cardArray: any;
  btnVisible: boolean = true;

  constructor(private theMovieDbService: TheMovieDBService) { }

  ngOnInit() {
    this.theMovieDbService.moviePopular$.subscribe(movies => this.cardArray = movies);
  }

  onClickedButton(){
    this.btnVisible = false;
    this.theMovieDbService.othersChargeBS.next(true);
  }

}
