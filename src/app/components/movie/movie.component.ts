import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MoviesService } from 'src/app/services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html'
})

export class MovieComponent implements OnInit {

  public movie: any;

  constructor(private _ms: MoviesService,
              private _route: ActivatedRoute,
              private _location: Location) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id'); // get ID of movie
    //console.log(id);

    this._ms.getMovieBy( id )
      .subscribe(
        (data: any) => {
          this.movie = data;
          //console.log(data);
      });
  }

  backClicked() { this._location.back(); }

  getImageUrlFrom( path: string, width?: string) {
    return this._ms.getImageUrlBy(path, width);
  }

}
