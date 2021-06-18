package com.catalogo.filmes.controller;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.catalogo.filmes.modelo.Filme;
import com.catalogo.filmes.service.FilmeService;

@CrossOrigin("http://localhost:4200")
@RestController
public class FilmesController{

	//INJETANDO O SERVICE
	@Autowired
	private FilmeService filmeService;

	@RequestMapping("/filmes")
	public ArrayList<Filme> retornandoTodosOsFilmes() {
		return filmeService.retornaListaDosFilmes();
	}

	@GetMapping("/filme/{id}")
	public Optional<Filme> detalhesDoFilme(@PathVariable int id) {
		return filmeService.filtrandoFilmesPeloID(id);
	}

	@GetMapping("/filme")
	public ArrayList<Filme> buscarFilmes(@RequestParam(value="nomeDoFilme", required = false) String nomeDoFilme) {
		return filmeService.filtrandoNomeDoFilme(nomeDoFilme);
	}

	@GetMapping("/filmes/quantidade")
	public int buscarQuantidadeDeFilmesCriados() {
		return filmeService.quantidadeDeFilmes();
	}

	@PostMapping("/cadastrarFilme")
	public Filme salvarFilme(@RequestBody Filme filme) {
		return filmeService.salvandoFilme(filme);
	}

	@DeleteMapping("/{id}")
	public void removerFilme(@PathVariable int id) {
		filmeService.deletandoFilme(id);
	}
	
	@PutMapping("/atualizarFilme")
	public void atualizarFilme(@RequestBody Filme filme) {
		filmeService.atualizadoFilme(filme);
	}
}