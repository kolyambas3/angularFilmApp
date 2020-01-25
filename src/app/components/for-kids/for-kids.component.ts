import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-kids',
  templateUrl: './for-kids.component.html',
  styleUrls: ['./for-kids.component.css']
})
export class ForKidsComponent implements OnInit {

  response: any;
  key = '16c304b01ef324b7cbe33db36640c53e';
  imageRequest = `https://image.tmdb.org/t/p/w500/`;
  page: number = 1;

  search =
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${this.key}&language=ru-RU&page=${this.page}`)
      .then(response => response.json())
      .then(json => {
        this.response = json.results
      });

  constructor() { }

  pageSearch(){
    fetch(`https://api.themoviedb.org/3/person/popular?api_key=${this.key}&language=ru-RU&page=${this.page}`)
      .then(response => response.json())
      .then(json => {
        this.response = json.results
      });
  }

  nxtPage(){
    this.page++;
    this.pageSearch()
  }

  prvPage(){
    this.page--;
    this.pageSearch()
  }

  ngOnInit() {
  }

}
