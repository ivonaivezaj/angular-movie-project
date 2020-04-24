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

  constructor(private router: Router,
    private localStorageService: LocalStorageService,
    private movieService: MovieService) { }

    //compile list of movies from local storage
  getMyList() {
    this.favorites = this.localStorageService.getFromLocalStorage();

    //iterate through the array and push each value at index is to movies[]
    this.favorites.forEach(id => {
      this.movieService.getMovie(id).subscribe(data => {
        this.movies.push(data);
        },
        err => console.log(err),
        () => console.log(this.movies)
      );
    });
  }

  removeFromFavorites(id: number) {
    this.localStorageService.removeFromLocalStorage(id);
    location.reload();
  }

  clearFavorites() {
    this.localStorageService.clearFavorites();
  }

  ngOnInit(): void {
    this.getMyList();
  }
  }

