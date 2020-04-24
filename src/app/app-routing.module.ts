import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';


const routes: Routes = [
  { path: 'detail/:id', component: MovieListComponent },
  { path: '', component: SearchCriteriaComponent },
  { path: 'favorites', component: WatchlistPageComponent },
  { path: 'popular', component: SearchCriteriaComponent },
  { path: 'upcoming', component: SearchCriteriaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
