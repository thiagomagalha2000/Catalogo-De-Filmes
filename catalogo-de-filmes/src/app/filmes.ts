import { DadosFilmes } from './DadosFilmes';
/*
export const filmes: DadosFilmes[] = [
  {
    id: 1,
    nome: 'Corajosos',
    lancamento: '26 de agosto de 2011',
    sinopse: 'Os policiais Adam (Alex Kendrick), Nathan (Ken Bevel), Shane (Kevin Downes) e David (Ben Davies) enfrentam diariamente nas ruas os maiores desafios de suas vidas e a dedicação deles é reconhecida por suas chefias. Mas se no cumprimento dessa tarefa eles não deixam dúvidas quanto a competência em cuidar da sociedade, em casa, o mesmo não pode ser dito porque eles estão falhando no papel de pais e maridos. E quando algo inesperado acontece, é preciso tomar uma decisão que mudara suas vidas.',
    direcao: 'Alex Kendrick',
    autor: 'Alex Kendrick, Kevin Downes, Ken Bevel',
    categorias: 'Drama',
    duracao: '2h10m',
    imagem: 'https://image.slidesharecdn.com/corajosos-guiadeestudobblico2016-161114192012/95/corajosos-guia-de-estudo-bblico-2016-1-638.jpg?cb=1512582865',
  },
  {
    id: 2,
    nome: 'À prova de fogo',
    lancamento: '26 de setembro de 2008',
    sinopse: 'No trabalho, o bombeiro Caleb Holt é um profissional que cumpre com todos os princípios, sendo um deles nunca deixar um companheiro para trás em uma situação de perigo. Já em sua casa, ao lado da esposa Catherine, as coisa são bem diferentes. Caleb é um marido ausente e depois de sete anos de união o relacionamento está chegando ao fim. O pai de Caleb pede então que ele inicie uma experiência de 40 dias, denominada "O Desafio do Amor", na tentativa de salvar o casamento.',
    direcao: 'Alex Kendrick',
    autor: 'Alex Kendrick, Stephen Kendrick',
    categorias: 'Drama',
    duracao: '2h02m',
    imagem: 'http://hachidori.com.br/wp-content/uploads/2018/04/a-prova-de-fogo-1200x801.jpg',
  },
  {
    id: 3,
    nome: 'Cartas para Deus',
    lancamento: '9 de abril de 2010',
    sinopse: 'Um menino de apenas oito anos de idade tem câncer e escreve suas orações em cartas para seu amigo Deus. Buscando um sentido para a vida, um carteiro encontra as orações do garoto e resolve ajudá-lo a mudar o destino de todos ao seu redor.',
    direcao: 'David Nixon',
    autor: 'Patrick Doughtie',
    categorias: 'Drama e Familia',
    duracao: '1h54m',
    imagem: 'http://4.bp.blogspot.com/-LYVoC5CSSAE/VHd5a3udJOI/AAAAAAAAfIY/UWEq83XXGkg/s2000/03.jpg',
  },
  {
    id: 4,
    nome: 'Deus não está morto',
    lancamento: '21 de agosto de 2014',
    sinopse: 'Quando o jovem Josh Wheaton entra para a universidade, ele conhece um arrogante professor de filosofia que não acredita em Deus. O aluno reafirma sua fé, e é desafiado pelo professor a provar a existência de Deus.',
    direcao: 'Harold Cronk',
    autor: 'Churck Jonzelman, Hunter Dennis, Cary Solomon',
    categorias: 'Drama e Familia',
    duracao: '1h53m',
    imagem: 'https://upload.wikimedia.org/wikipedia/pt/c/cf/God%27s_Not_Dead.jpg',
  },
  {
    id: 5,
    nome: 'O Milagre do Paraíso',
    lancamento: '21 de abril de 2016',
    sinopse: 'Christy e Kevin Beam são pais de três garotas: Abbie, Annabel e Adelynn. Cristãos convictos, os Beams vão à igreja com frequência. Um dia, Annabel começa a sentir fortes dores na região do abdome. Após muitos exames, é constatado que a garota possui um grave problema digestivo. Tal situação faz com que Christy busque a todo custo algum meio de salvar a vida da filha, ao mesmo tempo em que se afasta cada vez mais de sua crença em Deus',
    direcao: 'Patricia Riggen',
    autor: 'Christy Beam',
    categorias: 'Drama',
    duracao: '1h49m',
    imagem: 'https://i1.wp.com/filhosparaoceu.com.br/wp-content/uploads/2017/03/Milagres-do-Para%C3%ADso-Capa-Bluray-1.jpg?w=379&ssl=1'
  },
  
  {
    id: 6,
    nome: 'Desafiando Gigantes',
    lancamento: '21 de abril de 2016',
    sinopse: 'Técnico do Shiloh Eagles há seis anos, Grant Taylor (Alex Kendrick) nunca conseguiu levar sua equipe ao título da temporada. Além do mau desempenho no trabalho, Grant deve enfrentar outros problemas graves em casa e seu estado psicológico e moral nunca esteve tão abatido. Quando tudo parece estar prestes a ir por água abaixo, uma intervenção misteriosa muda o seu destino.',
    direcao: 'Alex Kendrick',
    autor: 'Erin Bethea, James Blackwell, Bailey Cave',
    categorias: 'Drama',
    duracao: '1h 52m',
    imagem: 'https://a-static.mlcdn.com.br/618x463/dvd-desafiando-gigantes-sony-pictures/videoperola/1606/ee280023bd9215349c7f51d645bead9b.jpg'
  }
];
*/

export class /*interface*/ Genre {
  id: number;
  nomeDoGenero: string;
}

export class /*interface*/ ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export class /*interface*/ ProductionCountries {
  iso_3166_1: string;
  name: string;
}

export class /*interface*/ SpokenLanguages {
  iso_639_1: string;
  name: string;
}

export class /*interface*/ Filme{
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: object;
  budget: number;
  genres: Array<Genre>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<ProductionCompanies>;
  production_countries: Array<ProductionCountries>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<SpokenLanguages>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number; 
}