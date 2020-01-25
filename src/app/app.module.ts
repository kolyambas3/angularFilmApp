import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { InCinemaComponent } from './components/in-cinema/in-cinema.component';
import { ForKidsComponent } from './components/for-kids/for-kids.component';
import { PopularComponent } from './components/popular/popular.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TvItemComponent } from './components/in-cinema/tv-item/tv-item.component';
import { MovieItemComponent } from './components/popular/movie-item/movie-item.component';
import { ActorItemComponent } from './components/for-kids/actor-item/actor-item.component';
import { SearchComponent } from './components/in-cinema/search/search.component';
import { SearchMovieComponent } from './components/popular/search-movie/search-movie.component';


const appRoutes:Routes = [
  {path: '', component:CarComponent},
  {path: 'about', component:ContactsComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'forKids', component:ForKidsComponent},
  {path: 'forKids/:id', component:ActorItemComponent},
  {path: 'inCinema', component:InCinemaComponent},
  {path: 'inCinema/:id', component:TvItemComponent},
  {path: 'popular', component:PopularComponent},
  {path: 'popular/:id', component:MovieItemComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    InCinemaComponent,
    ForKidsComponent,
    PopularComponent,
    ProfileComponent,
    TvItemComponent,
    MovieItemComponent,
    ActorItemComponent,
    SearchComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    CarouselModule,
    WavesModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
