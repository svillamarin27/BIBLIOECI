package edu.eci.arsw.BiblioEci.Persistence;

import java.util.List;

import edu.eci.arsw.BiblioEci.Model.Libro;

public interface LibroPersistence{

	void consultarLibro (int idLibro,String nombreLibro);

	List<Libro> getAllBooks()throws BiblioPersistenceException;

}