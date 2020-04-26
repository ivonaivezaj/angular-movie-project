import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';

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

interface ApiData {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
  showArrow: boolean;
}

@Component({
  selector: 'top-rated-list',
  templateUrl: './top-rated-list.component.html',
  styleUrls: ['./top-rated-list.component.css']
})
export class TopRatedListComponent implements OnInit {
  list: Movies[];
  movie: any;
  errorMessage: string;
  movieId: number;
  red: boolean = true;
  favorite: boolean;

  main: boolean = false;
  movieString: string;

  mainfilter: boolean = false;
  search_result: [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

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
      this.movieService.getTopRatedMovies(params.page).subscribe((data: ApiData) => {
        this.movie = data;
        if (data.page === 1) {
          data.showArrow = false;
        } else {
          data.showArrow = true;
        }
        this.movieService.updateMovieList(data.results);
        console.log("molly top rated component onchange");

      });
    }),

      error => {
        this.errorMessage = error.message;
      }
  }
}
