import { Component, Input, OnInit } from '@angular/core';
import { CardCast } from 'src/app/models/moviesModel';

@Component({
  selector: 'app-card-cast',
  templateUrl: './card-cast.component.html',
  styleUrls: ['./card-cast.component.scss']
})
export class CardCastComponent implements OnInit {

  @Input() objItems: any;
  objMovie: CardCast = {} as CardCast;

  constructor() { }

  ngOnInit() {
    this.objMovie = {
      id: this.objItems.id,
      original_name: this.objItems.original_name,
      profile_path: this.objItems.profile_path,
      known_for_department: this.objItems.known_for_department
    };
  }

}
