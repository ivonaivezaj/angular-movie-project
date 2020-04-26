import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';
import { Location } from '@angular/common';
import { LocalStorageService } from '../local-storage.service'


interface Movies {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  favorite: boolean;
}

interface movieServiceData {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
  showArrow: boolean;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  list: Movies[];
  movie: any;
  errorMessage: string;
  movieId: number;
  red: boolean = true;
  favorite: boolean;

  constructor(private movieService: MovieService, public route: ActivatedRoute) { }

  addWatchList = (movie) => {
    movie.favorite = !movie.favorite;
    this.movieService.updateMovieList(this.list);
  }

  scrollUp = () => {
    window.scroll(0, 0);

  }

  ngOnInit() {
    this.movieService.movieList.subscribe(list => this.list = list);

    this.route.params.subscribe(params => {
      this.movieService.getMoviePage(params.page).subscribe((data: movieServiceData) => {
        this.movie = data;
        if (data.page === 1) {
          data.showArrow = false;
        } else {
          data.showArrow = true;
        }
        this.movieService.updateMovieList(data.results);
      });
    }),

      error => {
        this.errorMessage = error.message;
      }
  }
}
