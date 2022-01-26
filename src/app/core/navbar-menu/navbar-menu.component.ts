import { TheMovieDBService } from './../../services/theMovieDB.service';
import { routeMenuFilm } from './../../shared/RouteEnum';
import { SharedService } from './../../services/shared.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { filter, switchMap, tap } from 'rxjs';
import { UpdateBSMovieService } from 'src/app/services/updateBSMovie/updateBSMovie.service';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  screenWidth: any;

  constructor(
    private sharedService: SharedService,
    private theMovieDbService: TheMovieDBService,
    private updateBSMovie: UpdateBSMovieService
    ) { }

  ngOnInit() {

    this.screenWidth = window.innerWidth;
    // this.theMovieDbService.othersCharge$.pipe(
    //   filter(value => value === true),
    //   switchMap(() => this.updateBSMovie.setActualSection$),
    //   // tap(actualSection => this.updateBSMovie.detectingChange(actualSection)),
    // ).subscribe(() => this.theMovieDbService.othersChargeBS.next(false));

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
  toggleDrawer() {
    this.sharedService.toggle();
  }


}
