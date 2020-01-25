import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent implements OnInit {

  films:any;
  key: string = '16c304b01ef324b7cbe33db36640c53e';
  imageRequest = `https://image.tmdb.org/t/p/w500/`;
  TVS:any;

  searchFilms = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=ru-RU&page=1`)
    .then(response => response.json())
    .then(json => {
      this.films = json.results
    });
  
    searchTV = fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}&language=ru-RU&page=1`)
    .then(response => response.json())
    .then(json => {
      this.TVS = json.results
    });  

  constructor() { }

  ngOnInit() {
  }
}