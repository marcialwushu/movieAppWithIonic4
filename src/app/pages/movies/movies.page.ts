import { Component, OnInit } from '@angular/core';
import { MovieService, SearchType } from '../../services/movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  /**
   * Constructor da nossa primeira página
   * @param movieService O movie Service para obter dados 
   */
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChanged() {
    // Chame a função do serviço que retorna um Observable
    this.results = this.movieService.searchData(this.searchTerm, this.type);
  }

}
