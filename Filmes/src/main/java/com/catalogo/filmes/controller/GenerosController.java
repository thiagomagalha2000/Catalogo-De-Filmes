package com.catalogo.filmes.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.catalogo.filmes.modelo.Genero;
import com.catalogo.filmes.service.GeneroService;

@CrossOrigin("http://localhost:4200")
@RestController
public class GenerosController {
	
	//INJETANDO O SERVICE
	@Autowired
	private GeneroService generoService;

	@RequestMapping("/generos")
	public ArrayList<Genero> retornandoTodosOsGeneros() {
		return generoService.retornaListaDosGeneros();
	}
}