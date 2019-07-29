import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  theaterMovies: any[];
  mostPopular: any[] ;
  mostPopularKids: any[];

  constructor(private _ms: MoviesService) {

    this._ms.getMostPopularMovies()
      .subscribe(
        (data: any) => {
          this.mostPopular = data.results
        });

    this._ms.getTrending('movie', 'week')
      .subscribe(
        (data: any) => {
          console.log(data.results);
        }
      )

    console.log(this.mostPopular);
  }

  ngOnInit() {
  }

}
