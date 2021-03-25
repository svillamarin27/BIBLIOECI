package edu.eci.arsw.BiblioEci.Persistence.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import edu.eci.arsw.BiblioEci.Model.Prestamo;

public interface PrestamoRepo extends JpaRepository<Prestamo,Integer> {

}
