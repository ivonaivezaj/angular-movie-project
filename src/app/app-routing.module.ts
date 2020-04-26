import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { TopRatedListComponent } from './top-rated-list/top-rated-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PopularComponent } from './popular/popular.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:id', component: MovieListComponent },
  { path: 'watchlist-page', component: WatchlistPageComponent },
  { path: 'movie-detail', component: MovieDetailComponent },
  { path: 'now-playing', component: NowPlayingComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'top-rated-list', component: TopRatedListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
