import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-actor-item',
  templateUrl: './actor-item.component.html',
  styleUrls: ['./actor-item.component.sass']
})
export class ActorItemComponent implements OnInit {

  response: any;
  key = '16c304b01ef324b7cbe33db36640c53e';
  imageRequest = `https://image.tmdb.org/t/p/original/`;
  actorID: number;
  private subscription: Subscription;
  otherName: string;

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.actorID = params['id']);
    this.search(this.actorID);
    this.getNames(this.actorID);
  }

  ngOnInit() {
  }
  // Получение данных о фильме
  search(id) {
    this.http.get(`https://api.themoviedb.org/3/person/${id}?api_key=${this.key}&language=ru-RU`)
      .subscribe(response => {
        this.response = response;
      });
      this.scrollTop()
  };
  getNames(id){
    fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${this.key}&language=ru-RU`)
    .then(response => response.json())
    .then(json => {
      this.otherName = json.also_known_as
    })
  }
  scrollTop() {
    window.scrollTo(pageXOffset, 0);
  }
}
