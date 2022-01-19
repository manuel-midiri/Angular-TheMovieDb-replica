import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  @Input() title: string = '';
  @Input() listMenu: string[] = ['Streaming', 'In TV', 'A noleggio', 'Al Cinema'];
  selectedItem: any;

  constructor() { }

  ngOnInit() {
  }

  onSelectSection(item: any){
    this.selectedItem = item;
  }

}
