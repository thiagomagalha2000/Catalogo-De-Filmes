import { Component, OnInit } from '@angular/core';
import { Filme } from '../filmes';
import { FilmeServiceSetadoDoJava } from '../filme.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

@Component({
  selector: 'app-atualizar-filmes',
  templateUrl: './atualizar-filmes.component.html',
  styleUrls: ['./atualizar-filmes.component.css']
})

export class AtualizarFilmesComponent implements OnInit {

  filmes: Filme[];

  constructor(private filmeServiceSetadoDoJava: FilmeServiceSetadoDoJava, private filmesNovos: trocandoJson,){}

  ngOnInit(){
    var listaDosFilmesNovos = []
    this.filmeServiceSetadoDoJava.buscarFilmesDoJava().subscribe((data: any[]) => {
      for (var filmeDoJava of data){
        var filmesComJsonAlterado = this.filmesNovos.mudarArquivoJsonDoBackParaOFront(filmeDoJava);
        listaDosFilmesNovos.push(filmesComJsonAlterado);
      }
      this.filmes = listaDosFilmesNovos;
    });
  }

  pesquisarFilmesPeloNome(event: Event){
    this.filmes=[];
    var filterValueNome = (event.target as HTMLInputElement).value;
    if(filterValueNome!=""){
      var listaDosPesquisados = []
      this.filmeServiceSetadoDoJava.pesquisarPeloNomeDoFilmeJava(filterValueNome).subscribe((data: any[]) =>{
        for (var filmeDoJava of data){
          var filmesComJsonAlterado = this.filmesNovos.mudarArquivoJsonDoBackParaOFront(filmeDoJava);
          listaDosPesquisados.push(filmesComJsonAlterado);
        }
        this.filmes = listaDosPesquisados;
      });
    }else{
      this.ngOnInit();
    }
  }
}