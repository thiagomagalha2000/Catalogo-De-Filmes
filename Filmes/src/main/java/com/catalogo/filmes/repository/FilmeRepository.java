package com.catalogo.filmes.repository;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Component;

import com.catalogo.filmes.modelo.Filme;

@Component
public interface FilmeRepository extends JpaRepository<Filme, Integer> {
	
	@Query("SELECT f FROM Filme f WHERE f.nome LIKE %?1%")
	ArrayList<Filme> findByNome(String nomeDoFilme);	
}