package com.catalogo.filmes.modelo;

import java.sql.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonFormat;

//As classes de domínio vão virar tabelas no banco de dados, é preciso transforma-las em entidades da JPA.
@Entity 
public class Filme {
	protected static int count = 0;

	//Chave primaria será gerado automaticamente pelo banco de dados
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)//IDENTITY: Id é autoincrementado
	private int id;
	private String nome;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd",locale = "pt-BR", timezone = "Brazil/East")
	private Date lancamento;
	private String sinopse;
	private int duracao;
	private String imagem;

    @ManyToMany
    @JoinTable(
    		name = "filme_genero",
    		joinColumns = @JoinColumn(name = "filme_id"),
    		inverseJoinColumns = @JoinColumn(name = "genero_id"))

    private List<Genero> generos;
    public Filme() {}

	public Filme(int id,String nome, Date lancamento, String sinopse, int duracao, String imagem) {
		this.id = id;
		this.nome = nome;
		this.lancamento = lancamento;
		this.sinopse = sinopse;
		this.duracao = duracao;
		this.imagem = imagem;
		count++;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getLancamento() {
		return lancamento;
	}

	public void setLancamento(Date lancamento) {
		this.lancamento = lancamento;
	}

	public String getSinopse() {
		return sinopse;
	}

	public void setSinopse(String sinopse) {
		this.sinopse = sinopse;
	}

	public int getDuracao() {
		return duracao;
	}

	public void setDuracao(int duracao) {
		this.duracao = duracao;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public static int quantidadeDeFilmesCriados() {
        return count;
    }

	public static void setCount(int count) {
		Filme.count = count;
	}

	public List<Genero> getGeneros() {
		return generos;
	}

	public void setGeneros(List<Genero> generos) {
		this.generos = generos;
	}
}