package com.catalogo.filmes.modelo;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Genero {

	//Chave primaria será gerado automaticamente pelo banco de dados
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)//IDENTITY: Id é autoincrementado
	private int id;
	private String nomeDoGenero;

	@ManyToMany
    @JoinTable(
    		name = "filme_genero",
    		joinColumns = @JoinColumn(name = "genero_id"),
    		inverseJoinColumns = @JoinColumn(name = "filme_id"))
	@JsonIgnore
	private List<Filme> filmes;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNomeDoGenero() {
		return nomeDoGenero;
	}

	public void setNomeDoGenero(String nomeDoGenero) {
		this.nomeDoGenero = nomeDoGenero;
	}

	public List<Filme> getFilmes() {
		return filmes;
	}

	public void setFilmes(List<Filme> filmes) {
		this.filmes = filmes;
	}
}