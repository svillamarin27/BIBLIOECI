package edu.eci.arsw.BiblioEci.Persistence.impl;

import java.util.List;


import org.springframework.stereotype.Repository;

import edu.eci.arsw.BiblioEci.Model.Libro;
import edu.eci.arsw.BiblioEci.Persistence.BiblioPersistenceException;
import edu.eci.arsw.BiblioEci.Persistence.LibroPersistence;
import edu.eci.arsw.BiblioEci.Persistence.repo.LibroRepo;

@Repository
public class LibroPersistenceImpl implements LibroPersistence {
	
	LibroRepo lbr;

	@Override
	public void consultarLibro(int idLibro, String nombreLibro) {
		// TODO Auto-generated method stub
		
	}

	@Override
    public List<Libro> getAllBooks() throws BiblioPersistenceException {
        if(lbr.count() == 0){
            throw new BiblioPersistenceException("Books not found");
        }
        return lbr.findAll();
    }

}
