import { CreditsModel, MovieById } from './../models/movieByIdModel';
import { MoviePopular, MovieTopRated, Theatres, TvPopular, TvTopRated } from './../models/moviesModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchModel } from '../models/searchModel';
import { TvById } from '../models/tvByIdModel';


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

  getMoviePopular(pageNumber: number = 1): Observable<MoviePopular>{
    return this.http.get<MoviePopular>(
    `${environment.endpoints.basePath}${environment.endpoints.moviePopular}?api_key=${this.v3Auth}&page=${pageNumber}`
    );
  }

  getMovieByID(idMovie: string): Observable<MovieById>{
    return this.http.get<MovieById>(
    `${environment.endpoints.basePath}${environment.endpoints.movieById}/${idMovie}?api_key=${this.v3Auth}`
    );
  }

  getMovieCredits(idMovie: string): Observable<CreditsModel>{
    return this.http.get<CreditsModel>(
    `${environment.endpoints.basePath}${environment.endpoints.movieById}/${idMovie}/credits?api_key=${this.v3Auth}`
    );
  }

  getTvPopular(pageNumber: number = 1): Observable<TvPopular>{
    return this.http.get<TvPopular>(
    `${environment.endpoints.basePath}${environment.endpoints.tvPopular}?api_key=${this.v3Auth}&page=${pageNumber}`
    );
  }

  getTvByID(idTv: string): Observable<TvById>{
    return this.http.get<TvById>(
    `${environment.endpoints.basePath}${environment.endpoints.tvById}/${idTv}?api_key=${this.v3Auth}`
    );
  }

  getTvCredits(idMovie: string): Observable<CreditsModel>{
    return this.http.get<CreditsModel>(
    `${environment.endpoints.basePath}${environment.endpoints.tvById}/${idMovie}/credits?api_key=${this.v3Auth}`
    );
  }

  getMovieTopRated(pageNumber: number = 1): Observable<MovieTopRated>{
    return this.http.get<MovieTopRated>(
    `${environment.endpoints.basePath}${environment.endpoints.movieTopRated}?api_key=${this.v3Auth}&page=${pageNumber}`
    );
  }

  getTvTopRated(pageNumber: number = 1): Observable<TvTopRated>{
    return this.http.get<TvTopRated>(
    `${environment.endpoints.basePath}${environment.endpoints.tvTopRated}?api_key=${this.v3Auth}&page=${pageNumber}`
    );
  }

  getTheater(pageNumber: number = 1): Observable<Theatres>{
    return this.http.get<Theatres>(
    `${environment.endpoints.basePath}${environment.endpoints.theatres}?api_key=${this.v3Auth}&page=${pageNumber}`
    );
  }

  getUpcoming(pageNumber: number = 1): Observable<Theatres>{
    return this.http.get<Theatres>(
    `${environment.endpoints.basePath}${environment.endpoints.upcoming}?api_key=${this.v3Auth}&page=${pageNumber}`
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
