import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  theaterMovies: any[];
  mostPopular: any[] ;
  mostPopularKids: any[];

  constructor(private _ms: MoviesService) {

    this._ms.getMostPopularMoviesInTheaters()
      .subscribe((data: any) => {  this.theaterMovies = data.results });

    this._ms.getTrending('movie', 'week')
      .subscribe((data: any) => { this.mostPopular = data.results });

    this._ms.getPopularMoviesForKids()
      .subscribe((data: any) => { this.mostPopularKids = data.results });
  }

}
