import { Filme } from './filmes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class trocandoJson{
    filmes: Filme[];
    filme: Filme;

    constructor(){}

    ngOnInit(){}

    mudarArquivoJsonDoBackParaOFront (arquivo: any): any{
        var jsonString = JSON.stringify(arquivo);

        jsonString = jsonString.replace("\"id\":", "\"id\":");
        jsonString = jsonString.replace("\"nome\":", "\"title\":");
        jsonString = jsonString.replace("\"lancamento\":", "\"release_date\":");
        jsonString = jsonString.replace("\"sinopse\":", "\"overview\":");
        jsonString = jsonString.replace("\"generos\":", "\"genres\":");
        jsonString = jsonString.replace("\"duracao\":", "\"runtime\":");
        jsonString = jsonString.replace("\"imagem\":", "\"backdrop_path\":");
        var jsonAtualizado = JSON.parse(jsonString);
        
        return jsonAtualizado;
    }
    
    mudarArquivoJsonDoFrontParaOBack (arquivo: any): any{
        var jsonAtualizado = JSON.stringify(arquivo);

        jsonAtualizado = jsonAtualizado.replace("\"id_do_filme\":", "\"id\":");
        jsonAtualizado = jsonAtualizado.replace("\"nome_do_filme\":", "\"nome\":");
        jsonAtualizado = jsonAtualizado.replace("\"lancamento_do_filme\":", "\"lancamento\":");
        jsonAtualizado = jsonAtualizado.replace("\"sinopse_do_filme\":", "\"sinopse\":");
        jsonAtualizado = jsonAtualizado.replace("\"categorias_do_filme_selecionados\":", "\"generos\":");
        jsonAtualizado = jsonAtualizado.replace("\"duracao_do_filme\":", "\"duracao\":");
        jsonAtualizado = jsonAtualizado.replace("\"imagem_do_filme\":", "\"imagem\":");
        jsonAtualizado = jsonAtualizado.replace("[","");
        jsonAtualizado = jsonAtualizado.replace("}]}]","}]}");

        return jsonAtualizado;
    }
}