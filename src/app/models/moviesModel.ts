//MOVIE POPULAR
export interface ResultMoviePopular {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MoviePopular {
  page: number;
  results: ResultMoviePopular[];
  total_pages: number;
  total_results: number;
}

//TV POPULAR
export interface ResultTvPopular {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TvPopular {
  page: number;
  results: ResultTvPopular[];
  total_pages: number;
  total_results: number;
}

//THEATRES
export interface DatesTheatres {
  maximum: string;
  minimum: string;
}

export interface ResultTheatres {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Theatres {
  dates: DatesTheatres;
  page: number;
  results: ResultTheatres[];
  total_pages: number;
  total_results: number;
}


//TV TOP RATED
export interface ResultTvTopRated {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface TvTopRated {
  page: number;
  results: ResultTvTopRated[];
  total_pages: number;
  total_results: number;
}


//MOVIE CARD
export interface Movie {
  id: number;
  image: string;
  date: string;
  title: string;
  vote: string;
}
