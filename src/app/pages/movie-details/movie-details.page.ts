import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  /**
   * Constructor da página de detalhes
   * 
   * @param activatedRoute Informação sobre a rota utilizada
   * @param movieService o Serviço movie para obter os dados 
   */
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    // Obter via GET o ID que foi passado pela url
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // Obeter via GET as informações da API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    })
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
