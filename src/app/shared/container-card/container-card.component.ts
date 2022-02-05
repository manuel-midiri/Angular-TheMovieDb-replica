import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html',
  styleUrls: ['./container-card.component.scss']
})
export class ContainerCardComponent implements OnInit {

  @Input() arrayItems: any[] = [];
  @Input() router: string = '';

  constructor() { }

  ngOnInit() {
    console.log(this.arrayItems);

  }

}
