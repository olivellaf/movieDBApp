import { Component, OnInit } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import 'rxjs/Rx';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

  private mostPopularMovies: any;


  constructor( private _ms: MoviesService) {
    this._ms.getMostPopularMovies()
      .subscribe(
        data => console.log(data.results)
      );
  }

  ngOnInit() {


  }

}
