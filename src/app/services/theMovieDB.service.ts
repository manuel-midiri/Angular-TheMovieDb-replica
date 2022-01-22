import { MoviePopular, MovieTopRated, Theatres, TvPopular, TvTopRated } from './../models/moviesModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchModel } from '../models/searchModel';


@Injectable({
  providedIn: 'root'
})

export class TheMovieDBService {

  private v3Auth = 'c8789c130e0bad7de895d3ecaa68396c';
  public moviePopularBS: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public moviePopular$: Observable<any> = this.moviePopularBS.asObservable();
  public movieFreeVisionBS: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public movieFreeVision$: Observable<any> = this.movieFreeVisionBS.asObservable();
  public movieTrailerBS: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public movieTrailer$: Observable<any> = this.movieTrailerBS.asObservable();
  public movieMovieTrendBS: BehaviorSubject<any> = new BehaviorSubject<any>('');
  public movieMovieTrend$: Observable<any> = this.movieMovieTrendBS.asObservable();

  constructor(private http: HttpClient) { }

  getSearchKeywords(value: any): Observable<SearchModel[]>{
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

  getMovieTopRated(): Observable<MovieTopRated>{
    return this.http.get<MovieTopRated>(
    `${environment.endpoints.basePath}${environment.endpoints.movieTopRated}?api_key=${this.v3Auth}`
    );
  }

  getTvTopRated(): Observable<TvTopRated>{
    return this.http.get<TvTopRated>(
    `${environment.endpoints.basePath}${environment.endpoints.tvTopRated}?api_key=${this.v3Auth}`
    );
  }

  getTheater(): Observable<Theatres>{
    return this.http.get<Theatres>(
    `${environment.endpoints.basePath}${environment.endpoints.theatres}?api_key=${this.v3Auth}`
    );
  }

  // getMovieLastes(): Observable<Theatres>{
  //   return this.http.get<Theatres>(
  //   `${environment.endpoints.basePath}${environment.endpoints.movieLastes}?api_key=${this.v3Auth}`
  //   );
  // }

  // getTvLastes(): Observable<Theatres>{
  //   return this.http.get<Theatres>(
  //   `${environment.endpoints.basePath}${environment.endpoints.movieLastes}?api_key=${this.v3Auth}`
  //   );
  // }

}
