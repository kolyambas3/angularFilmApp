import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service'

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {

  key: string = '16c304b01ef324b7cbe33db36640c53e';
  response: any;
  imageRequest = `https://image.tmdb.org/t/p/w500/`;
  page: number = 1;
  items;

  constructor(private profileService:ProfileService) {
  }

  search = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=ru-RU&page=${this.page}`)
    .then(response => response.json())
    .then(json => {
      this.response = json.results
    });

  pageSearch() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=ru-RU&page=${this.page}`)
      .then(response => response.json())
      .then(json => {
        this.response = json.results
      });
  }

  addToFav(i){
    this.profileService.addToFavMovie(i);
  }

  scrollTop() {
    window.scrollTo(pageXOffset, 0);
  }

  nxtPage() {
    this.page++;
    this.pageSearch()
    this.scrollTop()
  }

  prvPage() {
    this.page--;
    this.pageSearch()
    this.scrollTop()
  }

  ngOnInit() {
    this.items = this.profileService.getMovie()
  }

}
