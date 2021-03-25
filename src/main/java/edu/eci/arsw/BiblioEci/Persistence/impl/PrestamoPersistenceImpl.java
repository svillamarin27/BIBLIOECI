package edu.eci.arsw.BiblioEci.Persistence.impl;

import java.util.List;

import edu.eci.arsw.BiblioEci.Model.Prestamo;
import edu.eci.arsw.BiblioEci.Persistence.BiblioPersistenceException;
import edu.eci.arsw.BiblioEci.Persistence.PrestamoPersistence;
import edu.eci.arsw.BiblioEci.Persistence.repo.PrestamoRepo;

public class PrestamoPersistenceImpl implements PrestamoPersistence {

	
	PrestamoRepo prp;
	@Override
	public List<Prestamo> getAllPrestamos() throws BiblioPersistenceException {
		if(prp.count() == 0){
            throw new BiblioPersistenceException("Prestamos not found");
        }
        return prp.findAll();
    }
	

}
