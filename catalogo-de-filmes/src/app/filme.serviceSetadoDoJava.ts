import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
  
export class FilmeServiceSetadoDoJava{

    constructor(private httpClient: HttpClient){}

    ngOnInit(){}

    public buscarFilmesDoJava(){
        return this.httpClient.get('http://localhost:8080/filmes');
    }

    public buscarDetalheDoFilmeJava(id: number){
        return this.httpClient.get('http://localhost:8080/filme/'+id);
    }

    public pesquisarPeloNomeDoFilmeJava(nomeDoFilme: string){
        return this.httpClient.get('http://localhost:8080/filme?nomeDoFilme='+nomeDoFilme);
    }

    public pesquisarPeloGeneroDoFilmeJava(generoDoFilme: string){
        return this.httpClient.get('http://localhost:8080/filmeGenero?generoDoFilme='+generoDoFilme);
    }
    
    public buscarListaDosGeneros(){
        return this.httpClient.get('http://localhost:8080/generos');
    }

    public salvarFilme(arquivo:any){
        return this.httpClient.post('http://localhost:8080/cadastrarFilme',arquivo,{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    }

    public deletarFilme(id:number){
        return this.httpClient.delete('http://localhost:8080/'+id);
    }

    public atualizarFilme(arquivo:any){
        return this.httpClient.put('http://localhost:8080/atualizarFilme',arquivo,{
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'                
            }
        });
    }
}