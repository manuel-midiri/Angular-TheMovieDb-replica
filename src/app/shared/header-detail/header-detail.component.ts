import { Component, Input, OnInit } from '@angular/core';
import { HeaderModel } from 'src/app/models/movieByIdModel';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss']
})
export class HeaderDetailComponent implements OnInit {

  @Input() headerDetail: HeaderModel = {} as HeaderModel;

  constructor() { }

  ngOnInit() {}

}
