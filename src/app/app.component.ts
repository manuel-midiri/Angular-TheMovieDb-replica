import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit  {

  @ViewChild('drawer') public drawer: MatDrawer = {} as MatDrawer;

  constructor(private sharedService: SharedService){
    this.sharedService.getActualSection();
  }

  ngAfterViewInit(): void {
    this.sharedService.setDrawer(this.drawer);
  }

}
