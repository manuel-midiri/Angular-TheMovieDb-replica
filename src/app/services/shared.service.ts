import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { routeMenuFilm } from '../shared/RouteEnum';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

    private drawer: MatDrawer = {} as MatDrawer;
    setActualSectionBS: BehaviorSubject<string> = new BehaviorSubject<string>(routeMenuFilm.POPOLARE);
    setActualSection$: Observable<string> = this.setActualSectionBS.asObservable();
    setBtnVisibleBS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    setBtnVisible$: Observable<boolean> = this.setBtnVisibleBS.asObservable();
    othersChargeBS: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    othersCharge$: Observable<boolean> = this.othersChargeBS.asObservable();  


    constructor(private router: Router) { }

    setDrawer(drawer: MatDrawer): void {
        this.drawer = drawer;
    }

    toggle(): void {
        this.drawer.toggle();
    }

    getActualSection(): void {
      this.router.events.pipe(
        tap(() => this.othersChargeBS.next(false)),
        filter((navigation): navigation is NavigationEnd => navigation instanceof NavigationEnd),
        tap(route => this.setActualSectionBS.next(route.url))
      ).subscribe();
    }

}
