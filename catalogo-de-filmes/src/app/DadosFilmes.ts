export class DadosFilmes {
    constructor(
      public id: number,
      public nome: string,
      public lancamento: string,
      public sinopse: string,
      public direcao: string,
      public autor: string,
      public categorias: string,
      public duracao: string,
      public imagem: any,
    ){}
}