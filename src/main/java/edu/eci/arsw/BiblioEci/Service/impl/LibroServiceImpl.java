package edu.eci.arsw.BiblioEci.Service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.eci.arsw.BiblioEci.Model.Libro;
import edu.eci.arsw.BiblioEci.Persistence.BiblioPersistenceException;
import edu.eci.arsw.BiblioEci.Persistence.LibroPersistence;
import edu.eci.arsw.BiblioEci.Service.BiblioServiceException;
import edu.eci.arsw.BiblioEci.Service.LibroService;

import java.util.List;

@Service
public class LibroServiceImpl implements LibroService {
	
	@Autowired
	LibroPersistence lbp;
	
	public LibroServiceImpl() {}

	@Override
	public void consultarLibro(int idLibro, String nombreLibro) {
		
    }
		
	

	@Override
	public List<Libro> getAllBooks() throws BiblioServiceException {
		try{
            return lbp.getAllBooks();
        }catch (BiblioPersistenceException e){
            throw new BiblioServiceException(e.getMessage());
        }
	}

}
