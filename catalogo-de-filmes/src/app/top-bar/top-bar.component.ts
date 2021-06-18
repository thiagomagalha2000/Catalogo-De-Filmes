import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filmes';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
  animations:[]
})

export class TopBarComponent implements OnInit {

  filmes: Filme[];

  constructor(private filmeService: FilmeService) {}

  ngOnInit() {}

  trocarIdiomaDaPagina(idioma: string){
    this.filmeService.buscarIdiomaDaPagina(idioma).subscribe((data: any[]) => {
      this.filmes = data['results'];
    });
    localStorage.setItem('idioma',idioma);
    window.location.reload();
  }

  trocarAltoContraste(){
    /*
    Basicamente o document. getElementById , como o nome já diz, é uma função do JavaScript que serve 
    para retornar um elemento do DOM que é identificado por um ID específico
    */
    document.getElementById("alto-contraste").classList.toggle('alto-contraste');;
    //toggle(), se a classe existir naquele elemento, ele a remove, se não existir ele a adiciona.
  }

  mudarFonte(number: Number){
    /*
    Todos os elementos HTML podem ser selecionados usando-se o método getElementsByTagName() do objeto Document. 
    O retorno da função é um objeto semelhante a um array somente para leitura contendo os objetos Element 
    conforme definido no parâmetro.
    */
    var body = document.getElementsByTagName("body")[0];

    var valorAtribuidoDaFonte = parseInt(window.getComputedStyle(body, null).getPropertyValue("font-size"));

    if(number==1 && valorAtribuidoDaFonte<22){
      document.getElementsByTagName("body")[0].style.fontSize = (valorAtribuidoDaFonte + 2) + "px";
    }
    if(number==0){
      document.getElementsByTagName("body")[0].style.fontSize = 16 + "px";
    }
    if(number==-1 && valorAtribuidoDaFonte>10){
      document.getElementsByTagName("body")[0].style.fontSize = (valorAtribuidoDaFonte - 2) + "px";
    }
    /*
    O Window.getComputedStyle() é um método que retorna um objeto que contém os valores de todas as propriedades 
    CSS de um elemento, após aplicar folhas de estilo ativas e resolver qualquer cálculo básico que esses valores 
    possam conter. Os valores individuais das propriedades CSS são acessados ​​por APIs fornecidas pelo objeto ou 
    pela indexação com nomes de propriedades CSS.

    var style = window.getComputedStyle ( elemento [, pseudoElt ]);
    element - O Elementpara o qual obter o estilo calculado.
    pseudoEltOpcional - Uma sequência que especifica o pseudo-elemento a ser correspondido. Omitido (ou null) para elementos reais.
    
    A interface do método StyleDeclaration.getPropertyValue () retorna um DOMString contendo o valor de uma 
    propriedade CSS especificada.
    */
  }
}