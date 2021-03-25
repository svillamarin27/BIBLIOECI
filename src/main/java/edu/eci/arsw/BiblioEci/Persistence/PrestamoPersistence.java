package edu.eci.arsw.BiblioEci.Persistence;

import java.util.List;

import edu.eci.arsw.BiblioEci.Model.Prestamo;

public interface PrestamoPersistence {

	
	List<Prestamo> getAllPrestamos()throws BiblioPersistenceException;
}
