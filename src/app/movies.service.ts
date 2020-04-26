import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=a486995b02bc67cf6a8ae47a6d019bd5';
  constructor(private http: HttpClient) { }

  private _movieList = new BehaviorSubject<any[]>([]);
  movieList = this._movieList.asObservable();

  updateMovieList = newList => this._movieList.next(newList);
  getMovie = () => this.http.get(this.apiUrl);

  getMoviePage = (page: number) => {
    const pageUrl = `https://api.themoviedb.org/3/discover/movie?api_key=a486995b02bc67cf6a8ae47a6d019bd5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    return this.http.get(pageUrl);
  };

  getMovieDetail = (movieId: number) => {
    const detailUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a486995b02bc67cf6a8ae47a6d019bd5&language=en-US`
    return this.http.get(detailUrl);
  }

  searchMovie = (moviestr) => {
    if (!moviestr) {
      return this.getMovie();
    }
    const searchApi = `https://api.themoviedb.org/3/search/movie?query=${moviestr}&include_adult=false&page=1&language=en-US&api_key=a486995b02bc67cf6a8ae47a6d019bd5`;
    return this.http.get(searchApi);
  }

  getTopRatedMovies(moviePageTr) {
    const topRatedApi = `https://api.themoviedb.org/3/movie/top_rated?api_key=a486995b02bc67cf6a8ae47a6d019bd5&language=en-US&page=${moviePageTr}`;
    return this.http.get(topRatedApi);
  }

  getPopularMovies(moviePageP) {
    const popularApi = `https://api.themoviedb.org/3/movie/popular?api_key=a486995b02bc67cf6a8ae47a6d019bd5&language=en-US&page=${moviePageP}`;
    return this.http.get(popularApi);
  }

  getNowPlayingMovies(moviePage) {
    const nowPlayingApi = `https://api.themoviedb.org/3/movie/now_playing?api_key=a486995b02bc67cf6a8ae47a6d019bd5&language=en-US&page=${moviePage}`;
    return this.http.get(nowPlayingApi);
  }

  getGenreMovies() {
    const genreApi = `https://api.themoviedb.org/3/genre/movie/list?api_key=a486995b02bc67cf6a8ae47a6d019bd5&language=en-US`;
    return this.http.get(genreApi);
  }

  getGenreList(genreId: number) {
    const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=a486995b02bc67cf6a8ae47a6d019bd5&language=en-US&with_genres=${genreId}`;
    return this.http.get(genreUrl);
  }
}