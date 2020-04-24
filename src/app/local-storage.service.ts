import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable()
export class LocalStorageService {
  STORAGE_KEY = 'movie_id';
  watchList = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {

  }

  storeOnLocalStorage(movieId: number): void {

    //get items from array
    this.watchList = this.storage.get(this.STORAGE_KEY) || []; 
    // push new movie to array
    this.watchList.push(movieId);
    // insert updated array to local storage
    this.storage.set(this.STORAGE_KEY, this.watchList);
  }

  getFromLocalStorage() {
    // get array of movies from local storage
    return this.storage.get(this.STORAGE_KEY) || [];
  }

  //remove movie from storage
  removeFromLocalStorage(value) {
    this.watchList = this.storage.get(this.STORAGE_KEY) || []
    for (let i = 0; i < this.watchList.length; i++) {
      if (this.watchList[i] === value) {
        this.watchList.splice(i, 1);
      }
    }
    this.storage.set(this.STORAGE_KEY, this.watchList);
  }
  
  //clear storage
  clearFavorites() {
    this.storage.remove(this.STORAGE_KEY);
    this.watchList = [];
  }
}