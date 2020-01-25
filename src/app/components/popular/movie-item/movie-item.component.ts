import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.sass',
    './movie-item.css']
})
export class MovieItemComponent implements OnInit {

  response: any;
  key = '16c304b01ef324b7cbe33db36640c53e';
  imageRequest = `https://image.tmdb.org/t/p/w500/`;
  movieID: number = 550;
  recomendations: any;
  trailers: any;
  prodCompanies: any;
  private subscription: Subscription;
  url:string = 'https://www.youtube.com/embed/';
  urlSafe: SafeResourceUrl;
  playerVars = {
    cc_lang_pref: 'en'
  };


  // Получение кинокомпаний
  getCompanies (id) { fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=en-US`)
    .then(response => response.json())
    .then(json => {
      this.prodCompanies = json.production_companies;
    })};

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.subscription = activateRoute.params.subscribe(params => this.movieID = params['id']);
    this.search(this.movieID);
    this.getCompanies(this.movieID);
  }

  ngOnInit() {

  }
  // Получение рекомендаций
  getRecomendations(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.key}&language=ru-RU&page=1`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.recomendations = json.results;
    })
  };
  // Получение данных о фильме
  search(id) {
    this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.key}&language=ru-RU`)
      .subscribe(response => {
        this.response = response;
      });
      this.scrollTop();
      this.getRecomendations(id);
      this.getVideo(id);
      this.getCompanies(id);
  };
  // Получение видео
  getVideo(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.key}&language=ru-RU`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.trailers = json.results
      });
  };
  scrollTop() {
    window.scrollTo(pageXOffset, 0);
  };

  private player;
  private ytEvent;
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
}
