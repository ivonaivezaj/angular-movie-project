import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';
import { TopRatedListComponent } from './top-rated-list/top-rated-list.component';
import { GenreListComponent } from './genre-list/genre-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PopularComponent } from './popular/popular.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
    NavComponent,
    TopRatedListComponent,
    GenreListComponent,
    MovieDetailComponent,
    PopularComponent,
    NowPlayingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    RouterModule
  ],
  providers: [HttpClientModule, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
