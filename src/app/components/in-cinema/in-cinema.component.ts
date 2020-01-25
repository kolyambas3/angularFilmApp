import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-in-cinema',
  templateUrl: './in-cinema.component.html',
  styleUrls: ['./in-cinema.component.css']
})
export class InCinemaComponent implements OnInit {

  response: any;
  key = '16c304b01ef324b7cbe33db36640c53e';
  imageRequest = `https://image.tmdb.org/t/p/w500/`;
  page: number = 1;

  // films = fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=ru-RU`)
  // .then(response => response.json())
  // .then(json => {
  //   this.response = json.results;
  // });

  search =
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}&language=ru-RU`)
      .then(response => response.json())
      .then(json => {
        this.response = json.results
      })


  constructor(private http: HttpClient) { }

  pageSearch() {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${this.key}&language=ru-RU&page=${this.page}`)
      .then(response => response.json())
      .then(json => {
        this.response = json.results
      });
  }


  scrollTop() {
    window.scrollTo(pageXOffset, 0);
  }

  nxtPage() {
    this.page++;
    this.pageSearch();
    this.scrollTop()
  }

  prvPage() {
    this.page--;
    this.pageSearch();
    this.scrollTop()
  }

  ngOnInit() {
  }

}
