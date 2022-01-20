import { MoviePopular, Theatres, TvPopular, TvTopRated } from './../models/moviesModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchModel } from '../models/searchModel';


@Injectable({
  providedIn: 'root'
})

export class TheMovieDBService {

  private v3Auth = 'c8789c130e0bad7de895d3ecaa68396c';
  public moviePopularBS: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public moviePopular$: Observable<any> = this.moviePopularBS.asObservable();

  constructor(private http: HttpClient) { }

  getSearchKeywords(value: string): Observable<SearchModel[]>{
    return this.http.get<SearchModel[]>(
      `${environment.endpoints.basePath}${environment.endpoints.search}?api_key=${this.v3Auth}&query=${value}`
    );
  }

  getMoviePopular(): Observable<MoviePopular>{
    return this.http.get<MoviePopular>(
    `${environment.endpoints.basePath}${environment.endpoints.moviePopular}?api_key=${this.v3Auth}`
    );
  }

  getTvPopular(): Observable<TvPopular>{
    return this.http.get<TvPopular>(
    `${environment.endpoints.basePath}${environment.endpoints.tvPopular}?api_key=${this.v3Auth}`
    );
  }

  getTvTopRated(): Observable<TvTopRated>{
    return this.http.get<TvTopRated>(
    `${environment.endpoints.basePath}${environment.endpoints.tvTopRated}?api_key=${this.v3Auth}`
    );
  }

  getTheatresr(): Observable<Theatres>{
    return this.http.get<Theatres>(
    `${environment.endpoints.basePath}${environment.endpoints.theatres}?api_key=${this.v3Auth}`
    );
  }

}
