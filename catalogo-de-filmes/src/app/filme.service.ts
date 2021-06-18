import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  sendSearchByName(filterValue: string) {
    throw new Error("Method not implemented.");
  }
    
  private REST_API_SERVER = "https://api.themoviedb.org/3";
  private SEARCH_MOVIE = "/search/movie";
  private GET_DETAILS = "/movie/";
  private GET_POPULAR = "/movie/popular";
  private REST_API_KEY = "3cd350e6485e4470cf5cdab25dd02958";

  constructor(private httpClient: HttpClient) {
    /* EXEMPLO DE NOTAS
    1) Verbo CONNECT: 
    - Começa a comunicação bidirecional com o recurso solicitado. Ele pode ser usado para abrir um túnel.
    - Por exemplo, o método CONNECT pode ser utilizado para acessar websites que usam SSL (HTTPS). O cliente solicita
    a um servidor proxy HTTP que tunelize a conexão TCP para o destino desejado. O servidor então procede para fazer a
    conexão em nome do cliente. Uma vez que a conexão foi estabelecida pelo servidor, o servidor Proxy continua a proxy
    do fluxo TCP para e do cliente.
    - CONNECT é um método hop-by-hop.

    2) Verbo DELETE:
      - Usado para remover o recurso (por exemplo uma nota): utilize com passagem de ID.
      - Deleta o recurso especificado.
    
    3) Verbo GET:
      - Solicita uma representação do recurso especificado. Solicitações usando GET só devem recuperar dados.
      - Sem passagem de ID: vai retornar todas as notas (ou as notas mais recentes, isso cabe a regra de negócio da 
        aplicação).
      - Com passagem de ID: vai retornar a nota com ID especificado.
  
    4) Verbo HEAD: 
      - Solicita os cabeçalhos retornados de um recurso específico que foi requisitado por um método HTTP GET. Tal
      solicitação pode ser feita antes de baixar um grande recurso para economizar largura de banda, por exemplo.
      - Uma resposta para um método HEAD não deve ter um corpo. Se tiver, deve ser ignorado. Mesmo assim, entity 
      headers (cabeçalhos de entidade) descrevendo o conteúdo do corpo (como Content-Length) podem ser incluidos na 
      resposta. Eles não se relacionam com o corpo da resposta HEAD, que deve estar vazio, e sim com o corpo de 
      solicitação relacionado, usando o método GET que teria retornado como resposta.
      - Se a resposta de uma solicitação HEAD mostrar que um recurso armazenado em cache após uma requisição GET está 
      desatualizado, o cache é invalidado, mesmo se nenhuma solicitação GET tiver sido feita.

    5) Verbo OPTIONS:
    - Utilizado para que um cliente possa descobrir quais as opções de requisição permitidas para um determinado 
    recurso em um servidor. O cliente pode especificar uma URL específica no método OPTIONS ou um asterisco(*) 
    indicando que se refere ao servidor como um todo para sanar suas dúvidas em relação as opções de requisição 
    permitidas.

    6) Verbo PATCH:
      - Usado para editar o recurso sem a necessidade de enviar todos os atributos – o consumidor envia apenas aquilo
      que de fato foi alterado (mais o ID como parâmetro, para que o serviço saiba o que vai ser alterado).
      - O método HTTP PUT permite apenas substituições completas de um documento. Em contraste ao PUT, o método PATCH
      não é idempotente, ou seja, requisições sucessivas idênticas podem obter efeitos distintos. Todavia, é possível
      realizar requisições PATCH de modo a serem idempotentes.
      - PATCH (assim como PUT) podem ter efeitos colaterais em outros recursos.
      - Para descobrir se um servidor dá suporte a PATCH, um servidor pode divulgar seu suporte adicionando tal suporte
      à lista no cabeçalho de resposta HTTP "Allow" ou "Access-Control-Allow-Methods" (para CORS).
      - Outra indicação (implícita) da permissão de PATCH é a presença do cabeçalho "Accept-Patch", que especifica o 
      formato do documento patch aceito pelo servidor.

    7) Verbo POST:
      - Normalmente usado sem passagem de parâmetro e usado para criar uma nova nota.
      - Envia dados ao servidor. O tipo do corpo da solicitação é indicado pelo cabeçalho Content-Type.
      - A diferença entre PUT e POST é que PUT é idempotente: chamá-lo uma vez ou várias vezes sucessivamente tem o
      mesmo efeito (ou seja, nenhum efeito colateral), onde sucessivos POST idênticos podem ter efeitos adicionais,
      assim como passando uma ordem várias vezes.
      - Uma solicitação POST geralmente é enviada por meio de um formulário HTML e resulta em uma alteração no servidor.
      Nesse caso, o tipo de conteúdo é selecionado colocando a string adequada no atributo enctype do elemento <form>
      ou o atributo formenctype dos elementos <input> ou <button>:
          1. application/x-www-form-urlencoded: as chaves e valores são codificados em tuplas de valor-chave separadas
          por '&', com um '='  entre a chave e o valor. Caracteres não alfanuméricos em chaves e valores são percent
          encoded: este é o motivo pelo qual esse tipo não é adequado para uso com dados binários (ao invés disso, use
          multipart/form-data)
          2. multipart/form-data
          3. text/plain
      - Quando a requisição POST é enviada através de um método diferente de um formulário HTML - como por meio de um
      XMLHttpRequest - o corpo pode assumir qualquer tipo. Conforme descrito na especificação HTTP 1.1, o POST é
      projetado para permitir que um método uniforme cubra as seguintes funções:
          1. Anotação de recursos existentes
          2. Postar uma mensagem em um quadro de avisos, newsgroup, lista de emails ou grupo similar de artigos;
          3. Adicionando um novo usuário através de um modal de inscrição;
          4. Fornecendo um bloco de dados, como o resultado do envio de um formulário, para um processo de manipulação
          e dados;
          5. Estendendo um banco de dados por meio de uma operação de append.

    8) Verbo PUT:
      - Normalmente usado com parâmetro.
      - Use para editar o recurso – neste exemplo, uma nota.
      - cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados.
      - A diferença entre PUT e POST é que PUT é idempotente: chamá-lo uma ou várias vezes sucessivamente terá o mesmo
      efeito (não é um efeito colateral), enquanto usar POST repetidamente pode ter efeitos adicionais, como passar uma
      ordem várias vezes.

      OBS: A literatura indica que o verbo PUT deve passar todos os dados do recurso preenchidos, independente de 
      quais dados você de fato editou. Por exemplo, digamos que sua classe nota possui os atributos titulo e descrição
      – e você editou apenas o título. A documentação indica que você deve passar ambos os atributos preenchidos para
      o serviço (mesmo só tendo editado o título). 
          Para resolver essa questão de forma elegante a comunidade adotou, por convenção, o uso de um quinto verbo 
      HTTP: PATCH.
  
    9) Verbo TRACE:
    - Realiza um teste de loopback enviando uma mensagem por todo o caminho até o recurso alvo no qual foi destinado,
    provendo um mecanismo útil para debug.
    - O destinatário final deve responder a mensagem recebida, excluindo alguns campos descritos abaixo, de volta para
    o client com um status code 200 (OK) e um cabeçalho Content-Type. O destinatário final pode ser o servidor de
    origem ou o primeiro servidor a receber a requisição com o cabeçalho Max-Forwards com valor 0.

    */
  }

  public buscarDetalheDoFilme(id: String, idioma: string){
    return this.httpClient.get(this.REST_API_SERVER + this.GET_DETAILS + id + '?api_key=' +this.REST_API_KEY+ '&language='+ idioma);
  }
  public buscarNomeDoFilme(nomeDoFilme: string) {
    return this.httpClient.get(this.REST_API_SERVER + this.SEARCH_MOVIE + '?api_key=' + this.REST_API_KEY + '&language=pt-BR&query=' + nomeDoFilme );
  }
  public buscarIdiomaDaPagina(idioma: string) {
    return this.httpClient.get(this.REST_API_SERVER + this.GET_POPULAR + '?api_key=' + this.REST_API_KEY + '&language='+ idioma);
  }
  public trocarPagina(pagina: number){
    return this.httpClient.get(this.REST_API_SERVER + this.GET_POPULAR + '?api_key=' + this.REST_API_KEY + '&language=pt-BR&page=' + pagina );
  }
}

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=pt-BR

//https://api.themoviedb.org/3/find/{external_id}?api_key=<<api_key>>&language=pt-BR&external_source=imdb_id

//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=pt-Br&query=nomeDoFilme

//https://api.themoviedb.org/3/movie/changes?api_key=<<api_key>>&language=pt-BR&page=1