package com.catalogo.filmes.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.catalogo.filmes.modelo.Genero;
import com.catalogo.filmes.repository.GeneroRepository;

@Service
public class GeneroService {
	
	//INJETANDO O REPOSITORY
	@Autowired
	private GeneroRepository generoRepository;

	public ArrayList<Genero> retornaListaDosGeneros() {
		return (ArrayList<Genero>) generoRepository.findAll();
	}
}