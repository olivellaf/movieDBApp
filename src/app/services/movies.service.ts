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
  private imgPath = "https://image.tmdb.org/t/p/w";
  private languages = {
    'es': 'es',
    'en': 'en',
  }

  constructor( private jsonp: Jsonp) {  }

  getMostPopularMoviesInTheaters() {
    let url = `${ this.urlMovieDB }/discover/movie?api_key=${ this.apikey }&with_release_type=2|3&language=${ this.languages.en }${ this.callback }`;
    return this.jsonp.get(url)
      .map( res => res.json() );
  }


  getTrending( mediaType?: string, timeWindow?: string) {
    // media types : all, movie, tv, person
    // time windows: day, week

    if (mediaType == "" && timeWindow == "") {
      //console.log("getTrending has not received custom args");
      mediaType = 'movie'; timeWindow = 'week';
    }

    let url = `${ this.urlMovieDB }/trending/${ mediaType }/${ timeWindow }?sort_by=popularity.desc&api_key=${ this.apikey }&language=${ this.languages.en }${ this.callback }`;

    return this.jsonp.get(url)
      .map( res => res.json() );
  }

  getPopularMoviesForKids() {
    //let url2 = `${ this.urlMovieDB }/certification/movie/list?api_key=${ this.apikey }${ this.callback }`;
    let url = `${ this.urlMovieDB }/discover/movie?api_key=${ this.apikey }&sort_by=popularity.desc&certification_country=US&certification=G&include_adult=false&language=${ this.languages.en }${ this.callback }`;
    return this.jsonp.get(url)
      .map( res => res.json() );
  }

  getMovieBy( movie_id: string) {
    let url = `${ this.urlMovieDB }/movie/${ movie_id }?api_key=${ this.apikey }&language=${ this.languages.en }${ this.callback }`;
    return this.jsonp.get(url)
      .map( res => res.json() );
  }


  searchMovieBy( text: string ) {
    let url = `${ this.urlMovieDB }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apikey }&language=${ this.languages.en }${ this.callback }`;
    return this.jsonp.get(url)
      .map( res => res.json() );
  }



  getImageUrlBy( path:string, width?: string ) {

    if(path == "" || path == null || path == undefined) {
      //console.log("Path null or undefined");
      return "assets/img/image_not_found_movieApp.png";
    }

    if (width == "" || width == null || width == undefined) {
      //console.log("Width null or undefined");
      width = "300";
    }

    // example: image.tmdb.org/t/p/w + 300 + "/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg"
    return this.imgPath + width + path;

  }


}
