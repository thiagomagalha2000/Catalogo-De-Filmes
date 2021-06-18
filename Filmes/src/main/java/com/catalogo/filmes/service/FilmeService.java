package com.catalogo.filmes.service;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.catalogo.filmes.modelo.Filme;
import com.catalogo.filmes.repository.FilmeRepository;

@Service
public class FilmeService {
	/*
	Filme[] listaDosFilmes = {
			new Filme(
					1,
					"Corajosos",
					"26 de agosto de 2011",
					"Os policiais Adam (Alex Kendrick), Nathan (Ken Bevel), Shane (Kevin Downes) e David (Ben Davies) enfrentam diariamente nas ruas os maiores desafios de suas vidas e a dedica��o deles � reconhecida por suas chefias. Mas se no cumprimento dessa tarefa eles n�o deixam d�vidas quanto a compet�ncia em cuidar da sociedade, em casa, o mesmo n�o pode ser dito porque eles est�o falhando no papel de pais e maridos. E quando algo inesperado acontece, é preciso tomar uma decisão que mudara suas vidas.",
					"Drama",
					130,
					"https://image.slidesharecdn.com/corajosos-guiadeestudobblico2016-161114192012/95/corajosos-guia-de-estudo-bblico-2016-1-638.jpg?cb=1512582865"),
			new Filme(
					2,
					"À prova de fogo",
					"26 de setembro de 2008",
					"No trabalho, o bombeiro Caleb Holt é um profissional que cumpre com todos os princípios, sendo um deles nunca deixar um companheiro para trás em uma situação de perigo. Já em sua casa, ao lado da esposa Catherine, as coisa são bem diferentes. Caleb é um marido ausente e depois de sete anos de união o relacionamento está chegando ao fim. O pai de Caleb pede então que ele inicie uma experiência de 40 dias, denominada 'O Desafio do Amor', na tentativa de salvar o casamento.",
					"Drama",
					122,
					"http://hachidori.com.br/wp-content/uploads/2018/04/a-prova-de-fogo-1200x801.jpg"),
			new Filme(
					3,
					"Cartas para Deus",
					"9 de abril de 2010",
					"Um menino de apenas oito anos de idade tem câncer e escreve suas orações em cartas para seu amigo Deus. Buscando um sentido para a vida, um carteiro encontra as orações do garoto e resolve ajudá-lo a mudar o destino de todos ao seu redor.",
					"Drama e Familia",
					94,
					"http://4.bp.blogspot.com/-LYVoC5CSSAE/VHd5a3udJOI/AAAAAAAAfIY/UWEq83XXGkg/s2000/03.jpg"),
			new Filme(
					4,
					"Deus não está morto",
					"21 de agosto de 2014",
					"Quando o jovem Josh Wheaton entra para a universidade, ele conhece um arrogante professor de filosofia que não acredita em Deus. O aluno reafirma sua fé, e é desafiado pelo professor a provar a exist�ncia de Deus.",
					"Drama e Familia",
					113,
					"https://upload.wikimedia.org/wikipedia/pt/c/cf/God%27s_Not_Dead.jpg"),
			new Filme(
					5,
					"O milagre do paraíso",
					"21 de abril de 2016",
					"Christy e Kevin Beam são pais de três garotas: Abbie, Annabel e Adelynn. Cristãos convictos, os Beams vão à igreja com frequência. Um dia, Annabel começa a sentir fortes dores na região do abdome. Após muitos exames, é constatado que a garota possui um grave problema digestivo. Tal situação faz com que Christy busque a todo custo algum meio de salvar a vida da filha, ao mesmo tempo em que se afasta cada vez mais de sua crença em Deus",
					"Drama",
					109,
					"https://i1.wp.com/filhosparaoceu.com.br/wp-content/uploads/2017/03/Milagres-do-Para%C3%ADso-Capa-Bluray-1.jpg?w=379&ssl=1")};
	*/
	//INJETANDO O REPOSITORY
	@Autowired
	private FilmeRepository filmeRepository;

	public ArrayList<Filme> retornaListaDosFilmes() {
		return (ArrayList<Filme>) filmeRepository.findAll();
		//return listaDosFilmes;
	}

	public Optional<Filme> filtrandoFilmesPeloID(int id) {
		return filmeRepository.findById(id);
		/*
		if(0<id && id<=listaDosFilmes.length) {
			for(int i = 0 ; i<=listaDosFilmes.length; i++) {
				if(listaDosFilmes[i].getId() == id) {
					return listaDosFilmes[i];
				}
			}
			return null;
		}else {
			return null;
		}*/
	}

	public ArrayList<Filme> filtrandoNomeDoFilme(String nomeDoFilme) {	
		if(nomeDoFilme==null) {
			ArrayList<Filme> filmes = (ArrayList<Filme>) filmeRepository.findAll();
			return filmes;
		}else {
			ArrayList<Filme> filmes = filmeRepository.findByNome(nomeDoFilme);
			return filmes;
		}
		/*
		ArrayList<Filme> listaDosFilmesFiltrado = new ArrayList<Filme>();
		for(int i = 0 ; i<listaDosFilmes.length; i++) {
			if(listaDosFilmes[i].getNome().contains(nomeDoFilme)) {
				listaDosFilmesFiltrado.add(listaDosFilmes[i]);
			}
		}
		return listaDosFilmesFiltrado;
		*/
	}
	
	public int quantidadeDeFilmes() {
		return (int) filmeRepository.count();
		//return Filme.quantidadeDeFilmesCriados();
	}

	public Filme salvandoFilme(Filme filme) {
		return filmeRepository.save(filme);
	}
	
	public void deletandoFilme(int id){
		Optional<Filme> optional = filmeRepository.findById(id);
		if (optional.isPresent()) {
			filmeRepository.deleteById(id);
		}
	}
	
	public Filme atualizadoFilme(Filme filme) {
		return filmeRepository.save(filme);
	}
}