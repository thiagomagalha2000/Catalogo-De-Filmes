import { Component, EventEmitter, Output } from '@angular/core'
import { DataserviceService } from '../dataservice.service';
import { FilmeService } from '../filme.service';
import { FilmeServiceSetadoDoJava } from '../filme.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';

export interface Filme {}

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css'],
  providers : [DataserviceService],
  animations:[]
})

export class ListarFilmesComponent{
  @Output() pageChange: EventEmitter<number>;
  filmes: Filme[];

  constructor(private filmeServiceSetadoDoJava: FilmeServiceSetadoDoJava, private filmesNovos: trocandoJson,
    private filmeService: FilmeService){
  }
  
  ngOnInit(){
    let idioma = localStorage.getItem('idioma');
    this.filmeService.buscarIdiomaDaPagina(idioma).subscribe((data: any[]) => {
      this.filmes = data['results'];
    });
    /*
    var listaDosFilmesNovos = []
    this.filmeServiceSetadoDoJava.buscarFilmesDoJava().subscribe((data: any[]) => {
      //this.filmes = data;
      for (var filmeDoJava of data){
        var filmesComJsonAlterado = this.filmesNovos.mudarArquivoJsonDoBackParaOFront(filmeDoJava);
        listaDosFilmesNovos.push(filmesComJsonAlterado);
      }
      this.filmes = listaDosFilmesNovos;
    });
    */
  }
  
  paginaAtual = 1;
  pageChanged(valor: number) {
    if(valor==-1 && this.paginaAtual!=1){
      this.paginaAtual--;
    }
    if(valor==+1 && this.paginaAtual!=100){
      this.paginaAtual++;
    }
    if(valor==0){
      this.paginaAtual=1;
    }
    /*
    this.filmeService.trocarPagina(this.paginaAtual).subscribe((data: any[]) => {
      this.filmes = data['results'];
    })
    */
    this.ngOnInit();
  }

  pesquisarFilmesPeloNome(event: Event){
    var filterValue = (event.target as HTMLInputElement).value;
    if(filterValue!=""){
      this.filmeService.buscarNomeDoFilme(filterValue).subscribe((data: any[]) => {
        this.filmes = data['results'];  
      });
    }else {
      this.pageChanged(this.paginaAtual);
    }
    /*
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
      this.paginaAtual--;
      this.pageChanged(this.paginaAtual);
    }
    */
  }
}