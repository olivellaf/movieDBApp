import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// ROUTES
import { ROUTES } from './app.routes';

// services
import { MoviesService } from './services/movies.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { RowCardsComponent } from './components/row-cards/row-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MovieComponent,
    RowCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(ROUTES, { useHash: true } )
  ],
  providers: [
    MoviesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
