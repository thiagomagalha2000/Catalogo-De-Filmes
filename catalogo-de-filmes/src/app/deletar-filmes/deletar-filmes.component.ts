import { Component } from '@angular/core';
import { FilmeServiceSetadoDoJava } from '../filme.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';
import { Filme } from '../filmes';

@Component({
  selector: 'app-deletar-filmes',
  templateUrl: './deletar-filmes.component.html',
  styleUrls: ['./deletar-filmes.component.css']
})

export class DeletarFilmesComponent {

  filmes: Filme[];

  constructor(private filmeServiceSetadoDoJava: FilmeServiceSetadoDoJava, private filmesNovos: trocandoJson,){}

  ngOnInit(){
    var listaDosFilmesNovos = [];
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