import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  public found: boolean = false;
  public resultsFound: any[];
  public alertType: string = "info";

  constructor(private _ms: MoviesService) { }

  search( term: string ) {
    if(term.length > 3) {
      //console.log(term);
      this._ms.searchMovieBy(term)
        .subscribe(
          (data: any ) => {
            if(data.total_results > 0) {
              this.resultsFound = data.results;
              this.found = true;
              //console.log(data);
            } else {
              //console.log("Nothing found");
              this.found = false;
              this.alertType = "danger";
            }
        });

    } else {
      //console.log("Need more than 3 characters for start to search: ", term);
      this.alertType = "info";
      this.found = false;
    }
  }
}
