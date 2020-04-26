import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { MovieService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {
  favorites = [];
  movies = [];

  title = 'movie-app';
  red: boolean;
  list: any[];
  original: any[];

  constructor(private router: Router,
    private localStorageService: LocalStorageService,
    private movieService: MovieService) { }



  ngOnInit() {
    this.movieService.movieList.subscribe(list => {
      this.original = list;
      this.list = list.filter(movie => movie.favorite);
    });
  }


  removeTask = (movie) => {
    this.red = !this.red;
    movie.favorite = false;
    //  const list.movies =[]
    this.movieService.updateMovieList(this.original);
  }

  removeFromFavorites(id: number) {
    this.localStorageService.removeFromLocalStorage(id);
    location.reload();
  }

  clearFavorites() {
    this.localStorageService.clearFavorites();
  }
}

