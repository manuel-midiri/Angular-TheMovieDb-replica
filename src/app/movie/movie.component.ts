import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TheMovieDBService } from '../services/theMovieDB.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  cardArray: any;
  btnVisible: boolean = true;

  constructor(private theMovieDbService: TheMovieDBService, private router: Router) { }

  ngOnInit() {
    this.theMovieDbService.moviePopular$.subscribe(movies => this.cardArray = movies);
    this.router.events.subscribe(() => this.btnVisible = true);
  }

  onClickedButton(){
    this.btnVisible = false;
    this.theMovieDbService.othersChargeBS.next(true);
  }

}
