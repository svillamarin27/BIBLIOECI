package edu.eci.arsw.BiblioEci.Service;
import java.util.List;

import edu.eci.arsw.BiblioEci.Model.Libro;

public interface LibroService{
	
	void consultarLibro (int idLibro,String nombreLibro);

	

	List<Libro> getAllBooks() throws BiblioServiceException;
	
	
	
	
}