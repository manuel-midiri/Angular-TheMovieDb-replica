import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    private drawer: MatDrawer = {} as MatDrawer;

    constructor() { }


    setDrawer(drawer: MatDrawer) {
        this.drawer = drawer;
    }

    toggle(): void {
        this.drawer.toggle();
    }

}
