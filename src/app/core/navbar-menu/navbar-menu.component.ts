import { SharedService } from './../../services/shared.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-menu',
  templateUrl: './navbar-menu.component.html',
  styleUrls: ['./navbar-menu.component.scss']
})
export class NavbarMenuComponent implements OnInit {

  screenWidth: any;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = window.innerWidth;
  }

  toggleDrawer() {
    this.sharedService.toggle();
}

}
