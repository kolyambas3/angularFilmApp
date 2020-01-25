import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-tv',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchRequest: string;
  response: any;
  key = '16c304b01ef324b7cbe33db36640c53e';
  imageRequest = `https://image.tmdb.org/t/p/w500/`;

  constructor(private http: HttpClient) {
    console.log(this.response)
  }

  search() {
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=${this.key}&query=` + this.searchRequest)
      .then(response => response.json())
      .then(json => {
        this.response = json.results
      })
  }

  ngOnInit() {
  }

}
