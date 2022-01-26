import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';
import { filter } from 'rxjs';
import { TheMovieDBService } from '../services/theMovieDB.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  cardArray: any;
  btnVisible: boolean = true;
  scrollDistance: number = 4;
  throttle: number = 300;

  screenHeight: any;
  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;

  constructor(private theMovieDbService: TheMovieDBService, private router: Router, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.theMovieDbService.moviePopular$.subscribe(movies => this.cardArray = movies);
    this.router.events.pipe(
      filter((navigation): navigation is NavigationEnd => navigation instanceof NavigationEnd),
      ).subscribe((route) => {
        this.btnVisible = true;
        console.log('route', route.url);
      });
    }

    onClickedButton(){
      this.btnVisible = false;
      this.theMovieDbService.othersChargeBS.next(true);
    }


  onScrollDown(ev: any){
    // console.log('scrolled down');
    // console.log('setTotalContentSize', this.viewport.setTotalContentSize(100));

    // this.viewport.elementScrolled().subscribe(res => console.log('res', res))
    console.log('res', this.viewport.measureScrollOffset('bottom'));

    if (this.viewport.measureScrollOffset('bottom') < 10) {
      console.log('ci siamo!');
    }
  }



}
