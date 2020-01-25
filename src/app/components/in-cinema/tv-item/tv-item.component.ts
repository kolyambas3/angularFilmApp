import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-item',
  templateUrl: './tv-item.component.html',
  styleUrls: ['./tv-item.component.sass',
    './tv-item.css']
})
export class TvItemComponent implements OnInit {

  response: any;
  key = '16c304b01ef324b7cbe33db36640c53e';
  imageRequest = `https://image.tmdb.org/t/p/w500/`;
  movieID: number = 456;
  recomendations: any;
  images: any;
  prodCompanies: any;
  trailers: any
  private subscription: Subscription;
  playerVars = {
    cc_lang_pref: 'en'
  };


  getCompanies(id) {
    fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.key}&language=en-US`)
    .then(response => response.json())
    .then(json => {
      this.prodCompanies = json.production_companies;
      console.log(this.prodCompanies)
    })
  };

  getRecomendations(id) {
    fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${this.key}&language=ru-RU&page=1`)
    .then(response => {
      return response.json();
    })
    .then(json => {
      this.recomendations = json.results;
    })
  };

  scrollTop() {
    window.scrollTo(pageXOffset, 0);
  }

  search(id) {
    this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.key}&language=ru-RU`)
      .subscribe(response => {
        this.response = response;
      });
    this.scrollTop();
    this.getCompanies(id);
    this.getRecomendations(id);
    this.getVideo(id)
  };

  getVideo(id) {
    fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${this.key}&language=ru-RU`)
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.trailers = json.results
      });
  };

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
    this.subscription = this.activateRoute.params.subscribe(params => this.movieID = params['id']);
    this.search(this.movieID);
  }

  ngOnInit() {
  }

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
