import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  favTV: any[];
  favMovie: any[];

  addToFavTv(id){
    this.favTV.push(id);
    console.log(this.favTV)
    setInterval( () => {
      alert('Сериал успешно добавлен в избранное')
    },3000)
  }

  addToFavMovie(id){
    this.favMovie.push(id);
    console.log(this.favMovie)
    setInterval(() => {
      alert('Фильм успешно добавлен')
    }, 3000)
  }

  getTv() {
    return this.favTV;
  }

  getMovie() {
    return this.favMovie
  }

  constructor() { }
}
