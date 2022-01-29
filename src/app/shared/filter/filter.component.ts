import { TheMovieDBService } from './../../services/theMovieDB.service';
import { MatSelect } from '@angular/material/select';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectOption } from 'src/app/models/searchModel';
import { switchMap, tap } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { UpdateBSMovieService } from 'src/app/services/updateBSMovie/updateBSMovie.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @ViewChild('selectSort') selectSort: MatSelect = {} as MatSelect;
  selectionDefault: string = '1';
  actualSort: string = '';

  sorts: SelectOption[] = [
    {value: '1', view: 'Popolarità Decrescente'},
    {value: '2', view: 'Popolarità Crescente'},
    {value: '3', view: 'Valutazione Decrescente'},
    {value: '4', view: 'Valutazione Crescente'},
    {value: '5', view: 'Data Rilascio Decrescente'},
    {value: '6', view: 'Data Rilascio Crescente'},
    {value: '7', view: 'Titolo A-Z'},
    {value: '8', view: 'Titolo Z-A'},
  ];

  formSelect: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private sharedService: SharedService, private updateBsService: UpdateBSMovieService) {
    this.sharedService.setFilter$.subscribe(currentValue => {
      this.selectionDefault = currentValue
      this.formSelect = this.fb.group({
        sort: [this.selectionDefault, Validators.required]
      });
    });
  }

  ngOnInit() {}

  get f(){
    return this.formSelect.controls;
  }

  onSubmit(){
    console.log('value formSelect', this.formSelect.value);
    this.sharedService.setFilterBS.next(this.formSelect.get('sort')?.value);
    this.updateBsService.getMovie();
  }

}
