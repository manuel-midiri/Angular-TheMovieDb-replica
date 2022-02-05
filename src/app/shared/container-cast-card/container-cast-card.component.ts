import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-cast-card',
  templateUrl: './container-cast-card.component.html',
  styleUrls: ['./container-cast-card.component.scss']
})
export class ContainerCastCardComponent implements OnInit {

  @Input() arrayItems: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
