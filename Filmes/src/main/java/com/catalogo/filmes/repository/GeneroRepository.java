package com.catalogo.filmes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.catalogo.filmes.modelo.Genero;

@Component
public interface GeneroRepository extends JpaRepository<Genero, Integer>{}