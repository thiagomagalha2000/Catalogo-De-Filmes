import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from '../filme.service';
import { Filme } from '../filmes';
import { FilmeServiceSetadoDoJava } from '../filme.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-filmes-detalhes',
  templateUrl: './filmes-detalhes.component.html',
  styleUrls: ['./filmes-detalhes.component.css'],
})

export class FilmesDetalhesComponent implements OnInit {

  filme: Filme;

  constructor(private filmeServiceSetadoDoJava: FilmeServiceSetadoDoJava,  private filmeNovo: trocandoJson,
    private route: ActivatedRoute, private filmeService: FilmeService){}

  ngOnInit(): void {
    this.getFilme(this.route.snapshot.params['id']);
  }
  getFilme(id: number){
    /*
    let idioma = localStorage.getItem('idioma');
    this.filmeService.buscarDetalheDoFilme(id,idioma).subscribe((data: Filme) => {
      this.filme = data;
    })
    */
    this.filmeServiceSetadoDoJava.buscarDetalheDoFilmeJava(id).subscribe((data: Filme) => {
      this.filme = this.filmeNovo.mudarArquivoJsonDoBackParaOFront(data);
    });
  }
}