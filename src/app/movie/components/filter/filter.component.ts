import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  sorts: string[] = [
    'Popolarità Decrescente',
    'Popolarità Crescente',
    'Valutazione Decrescente',
    'Valutazione Crescente',
    'Data Rilascio Decrescente',
    'Data Rilascio Crescente',
    'Titolo A-Z',
    'Titolo Z-A',
  ];

  constructor() { }

  ngOnInit() {
  }

}
