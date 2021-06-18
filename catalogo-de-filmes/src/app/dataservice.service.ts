import { Injectable } from '@angular/core';
import { DadosFilmes } from './DadosFilmes'

@Injectable()
export class DataserviceService {

  getDadosFilmes(){
    return [
      new DadosFilmes(
       1,
      'Corajosos',
      '26 de agosto de 2011',
      'Os policiais Adam (Alex Kendrick), Nathan (Ken Bevel), Shane (Kevin Downes) e David (Ben Davies) enfrentam diariamente nas ruas os maiores desafios de suas vidas e a dedicação deles é reconhecida por suas chefias. Mas se no cumprimento dessa tarefa eles não deixam dúvidas quanto a competência em cuidar da sociedade, em casa, o mesmo não pode ser dito porque eles estão falhando no papel de pais e maridos. E quando algo inesperado acontece, é preciso tomar uma decisão que mudara suas vidas.',
      'Alex Kendrick',
      'Alex Kendrick, Kevin Downes, Ken Bevel',
      'Drama',
      '2h10m',
      'https://image.slidesharecdn.com/corajosos-guiadeestudobblico2016-161114192012/95/corajosos-guia-de-estudo-bblico-2016-1-638.jpg?cb=1512582865'
      ),

      new DadosFilmes(
       2,
      'À prova de fogo',
      '26 de setembro de 2008',
      'No trabalho, o bombeiro Caleb Holt é um profissional que cumpre com todos os princípios, sendo um deles nunca deixar um companheiro para trás em uma situação de perigo. Já em sua casa, ao lado da esposa Catherine, as coisa são bem diferentes. Caleb é um marido ausente e depois de sete anos de união o relacionamento está chegando ao fim. O pai de Caleb pede então que ele inicie uma experiência de 40 dias, denominada "O Desafio do Amor", na tentativa de salvar o casamento.',
      'Alex Kendrick',
      'Alex Kendrick, Stephen Kendrick',
      'Drama',
      '2h02m',
      'http://hachidori.com.br/wp-content/uploads/2018/04/a-prova-de-fogo-1200x801.jpg'
      ),

      new DadosFilmes(
       3,
      'Cartas para Deus',
      '9 de abril de 2010',
      'Um menino de apenas oito anos de idade tem câncer e escreve suas orações em cartas para seu amigo Deus. Buscando um sentido para a vida, um carteiro encontra as orações do garoto e resolve ajudá-lo a mudar o destino de todos ao seu redor.',
      'David Nixon',
      'Patrick Doughtie',
      'Drama e Familia',
      '1h54m',
      'http://4.bp.blogspot.com/-LYVoC5CSSAE/VHd5a3udJOI/AAAAAAAAfIY/UWEq83XXGkg/s2000/03.jpg'
      ),

      new DadosFilmes(
       4,
      'Deus não está morto',
      '21 de agosto de 2014',
      'Quando o jovem Josh Wheaton entra para a universidade, ele conhece um arrogante professor de filosofia que não acredita em Deus. O aluno reafirma sua fé, e é desafiado pelo professor a provar a existência de Deus.',
      'Harold Cronk',
      'Churck Jonzelman, Hunter Dennis, Cary Solomon',
      'Drama e Familia',
      '1h53m',
      'https://upload.wikimedia.org/wikipedia/pt/c/cf/God%27s_Not_Dead.jpg'
      ),

      new DadosFilmes(
       5,
      'O Milagre do Paraíso',
      '21 de abril de 2016',
      'Christy e Kevin Beam são pais de três garotas: Abbie, Annabel e Adelynn. Cristãos convictos, os Beams vão à igreja com frequência. Um dia, Annabel começa a sentir fortes dores na região do abdome. Após muitos exames, é constatado que a garota possui um grave problema digestivo. Tal situação faz com que Christy busque a todo custo algum meio de salvar a vida da filha, ao mesmo tempo em que se afasta cada vez mais de sua crença em Deus',
      'Patricia Riggen',
      'Christy Beam',
      'Drama',
      '1h49m',
      'https://i1.wp.com/filhosparaoceu.com.br/wp-content/uploads/2017/03/Milagres-do-Para%C3%ADso-Capa-Bluray-1.jpg?w=379&ssl=1'
      ), 
    ];
  }
  constructor() { }
}
