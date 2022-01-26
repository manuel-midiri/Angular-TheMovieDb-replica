import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { TheMovieDBService } from '../services/theMovieDB.service';
import { UpdateBSMovieService } from '../services/updateBSMovie/updateBSMovie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  cardArray: any;
  btnVisible: boolean = true;

  constructor(
    private theMovieDbService: TheMovieDBService, 
    private router: Router, 
    private sharedSservice: SharedService,
    private updateBSservice: UpdateBSMovieService
    ) { }

  ngOnInit() {
    this.sharedSservice.othersChargeBS.next(false);

    this.theMovieDbService.moviePopular$.subscribe(movies => this.cardArray = movies);
    this.router.events.pipe(
      filter((navigation): navigation is NavigationEnd => navigation instanceof NavigationEnd),
      ).subscribe(() => this.btnVisible = true);
    this.sharedSservice.othersCharge$.subscribe(valueBoolean => {
      if (valueBoolean) {
        this.updateBSservice.detectingChange();
      } else {
        this.updateBSservice.getMovie();
      }
    });
    }

    onClickedButton(){
      this.btnVisible = false;
      this.sharedSservice.othersChargeBS.next(true);
    }

}
