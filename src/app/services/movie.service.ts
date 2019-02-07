import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Typescript custom enum for search types (optional)

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = ''; // <-- Digite sua chave de acesso da api

  /**
   * Construtor do Serviço com Injeção de Dependência
   * @param http O HttpClient Angular padrão para fazer solicitações
   */
  constructor(private http: HttpClient) { }


  /**
   * Obter dados do OmdbApi
   * map no result para retornar apenas os resultados que precisamos
   * 
   * @param {string} title Busca do termo
   * @param {SearchType} type movie, series, episode ou vazio
   * @returns Observable com os resultados da pesquisa
   */
  searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }


  /**
   * Obtenha as informações detalhadas de um ID usando o parâmetro "i"
   * 
   * @param {string} id imdbID para recuperar informações 
   * @returns Observable com informações detalhadas
   */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
