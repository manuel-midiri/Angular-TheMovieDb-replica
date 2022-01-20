import { TheMovieDBService } from './../../services/theMovieDB.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  @Input() title: string = '';
  @Input() listMenu: string[] = ['Streaming', 'In TV', 'A noleggio', 'Al Cinema'];
  selectedItem: string = this.listMenu[0];

  constructor(private theMovieDBService: TheMovieDBService) { }

  ngOnInit() {
    this.theMovieDBService.getMoviePopular().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
  }

  onSelectSection(item: any){
    this.selectedItem = item;
    switch (item) {
      case this.listMenu[0]:
        this.theMovieDBService.getMoviePopular().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
        break;
      case this.listMenu[1]:
        this.theMovieDBService.getTvPopular().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
        break;
      case this.listMenu[2]:
        this.theMovieDBService.getTvTopRated().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
        break;
      case this.listMenu[3]:
        this.theMovieDBService.getTheatresr().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
        break;
      default:
        this.theMovieDBService.getMoviePopular().subscribe(movie => this.theMovieDBService.moviePopularBS.next(movie));
        break;
    }
  }

}
