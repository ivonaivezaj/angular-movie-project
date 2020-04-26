
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Route } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { GenreListComponent } from '../genre-list/genre-list.component';
import { NavComponent } from '../nav/nav.component';
import { TopRatedListComponent } from '../top-rated-list/top-rated-list.component';



// interface Movies {
//   poster_path: string;
//   adult: boolean;
//   overview: string;
//   release_date: string;
//   genre_ids: number[];
//   id: number;
//   original_title: string;
//   title: string;
//   backdrop_path: string;
//   popularity: number;
//   vote_count: number;
//   video: boolean;
//   vote_average: number;
//   favorite: boolean;
// }

// interface movieServiceData {
//   page: number;
//   results: Movies[];
//   total_results: number;
//   total_pages: number;
//   showArrow: boolean;
// }

interface GenreData {
  genres: Genres[];
}

interface Genres {
  id: number;
  number: string;
}

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers: [MovieService]
})


export class SearchCriteriaComponent implements OnInit {
  main: boolean = false;
  movie: any;
  movieString: string;

  mainfilter: boolean = false;
  // search_result: [];

  search_result: [];
  genreList: Genres[];
  genreId: number = 0;




  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  ngOnInit() {

    this.movieService.getGenreMovies().subscribe((data: GenreData) => {
      this.genreList = data.genres;
    });

  }

  toggleSearchInput = () => {
    this.main = !this.main;
  };

  toggleFilters = () => {
    this.mainfilter = !this.mainfilter;
  };

  searchMovie = () => {
    this.movieService.searchMovie(this.movieString).subscribe((data: { results: [] }) => {
      console.log(data.results);
      this.movieService.updateMovieList(data.results);
      this.genreId = 0;
    });
  }

  onChange = (event) => {
    this.movieService.getGenreList(this.genreId).subscribe((data: { results: [] }) => this.movieService.updateMovieList(data.results));
    console.log(this.genreId);
  }

  onClick = () => {
    this.genreId = 0;
    console.log(this.genreId);
  }

}


  // addWatchList = (movie) => {
  //   movie.favorite = !movie.favorite;
  //   //  const list.movies =[]
  //   this.movieService.updateMovieList(this.list);
  // }

  // scrollUp = () => {
  //   window.scroll(0, 0);
  // }
//   ngOnInit() {

//     this.movieService.movieList.subscribe(list => this.list = list);


//     this.movieService.getGenreMovies().subscribe((data: GenreData) => {
//       this.genreList = data.genres;
//     });


//     this.route.params.subscribe(params => {
//       this.movieService.getTopRatedMovies(params.page).subscribe((data: movieServiceData) => {
//         this.movie = data;
//         if (data.page === 1) {
//           data.showArrow = false;
//         } else {
//           data.showArrow = true;
//         }
//         this.movieService.updateMovieList(data.results);
//       });
//     }),

//       error => {
//         this.errorMessage = error.message;
//       }

//   }

//   toggleSearchInput = () => {
//     this.main = !this.main;
//   };

//   toggleFilters = () => {
//     this.mainfilter = !this.mainfilter;
//   };

//   searchMovie = () => {
//     this.movieService.searchMovie(this.movieString).subscribe((data: { results: [] }) => {
//       console.log(data.results);
//       this.movieService.updateMovieList(data.results);
//       this.genreId = 0;
//       console.log("molly search component");
//     });

//   }

//   onChange = (event) => {
//     this.movieService.getGenreList(this.genreId).subscribe((data: { results: [] }) => this.movieService.updateMovieList(data.results));
//     console.log(this.genreId);
//     console.log("molly search component onchange");
//   }

//   onClick = () => {
//     this.genreId = 0;
//     console.log(this.genreId);
//   }

// }
