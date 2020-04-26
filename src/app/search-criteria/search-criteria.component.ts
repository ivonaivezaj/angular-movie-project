
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movies.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Route } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { GenreListComponent } from '../genre-list/genre-list.component';
import { NavComponent } from '../nav/nav.component';
import { TopRatedListComponent } from '../top-rated-list/top-rated-list.component';



@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers: [MovieService]
})


export class SearchCriteriaComponent implements OnInit {





  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  ngOnInit() {

  }
}