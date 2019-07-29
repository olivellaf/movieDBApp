import { Injectable } from '@angular/core';
import { Jsonp }  from '@angular/http'; // we are not to use http
import 'rxjs/Rx';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey: string = "c1995010a79b86f7e153b05585efc171";
  private urlMovieDB: string = "https://api.themoviedb.org/3";
  private callback = "&callback=JSONP_CALLBACK"; // necesario. Añadir a la url de la petición
  private imgPath = "image.tmdb.org/t/p/w";

  constructor( private jsonp: Jsonp) {  }

  getMostPopularMovies() {
    let url = `${ this.urlMovieDB }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es${ this.callback }`;
    return this.jsonp.get(url)
      .map( res => res.json() );
  }


  getTrending( mediaType?: string, timeWindow?: string) {
    // media types : all, movie, tv, person
    // time windows: day, week

    if (mediaType == "" && timeWindow == "") {
      console.log("getTrending has not received custom args");
      mediaType = 'movie'; timeWindow = 'week';
    }

    let url = `${ this.urlMovieDB }/trending/${ mediaType }/${ timeWindow }?sort_by=popularity.desc&api_key=${ this.apikey }&language=es${ this.callback }`;

    return this.jsonp.get(url)
      .map( res => res.json() );

  }


  searchMovieBy( text: string ) {
    let url = `${ this.urlMovieDB }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es${ this.callback }`;
    return this.jsonp.get(url)
      .map( res => res.json() );
  }



  getImageUrlBy( path:string, width?: string ) {

    if (width = "") {
      width = "300";
    }

    // example: image.tmdb.org/t/p/w + 300 + "/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg"
    return this.imgPath + width + path;

  }


}
