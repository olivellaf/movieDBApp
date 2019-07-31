import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-row-cards',
  templateUrl: './row-cards.component.html'
})
export class RowCardsComponent implements OnInit {

  @Input('movies') movies;

  constructor(private _ms: MoviesService) { }

  ngOnInit() {  }

  getImageUrlFrom( path: string, width?: string) {
    return this._ms.getImageUrlBy(path, width);
  }

}
