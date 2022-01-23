import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
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
    this.router.events.subscribe((navigationEnd: any) => {
      this.btnVisible = true;
      // this.theMovieDbService.othersCharge$.subscribe(valueBoolean => {
      //   // this.btnVisible = valueBoolean;
      //   console.log('valueBoolean', valueBoolean);
      //   // this.theMovieDbService.othersChargeBS.next(valueBoolean);
      // });
    });
    // this.theMovieDbService.othersCharge$.subscribe(valueBoolean => {
    //   this.btnVisible = valueBoolean;
    //   console.log('valueBoolean fuori', valueBoolean);
    //   // this.theMovieDbService.othersChargeBS.next(valueBoolean);
    // });
  }

  onClickedButton(){
    this.btnVisible = false;
    this.theMovieDbService.othersChargeBS.next(true);
  }

}
