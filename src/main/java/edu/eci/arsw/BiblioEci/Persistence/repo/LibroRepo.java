package edu.eci.arsw.BiblioEci.Persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.eci.arsw.BiblioEci.Model.Libro;

public interface LibroRepo extends JpaRepository<Libro,Integer>{

	
}
