import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';

interface Movies {
  backdrop_path: string;
  genres: {
    id: number;
    name: string
  }[];
  homepage: string;
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: number;
  tagline: string;
  title: string;
  vote_count: number;
  vote_average: number;
}


interface movieServiceData {
  page: number;
  results: Movies[];
  total_results: number;
  total_pages: number;
}

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  list: Movies[];
  movie: any;

  constructor(private movieService: MovieService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieDetail(params.id).subscribe((data: movieServiceData) => {
        this.movie = data;
      });
    })
  }

  exitTask = (movie) => {
    this.movie = !this.movie;
  }

}
