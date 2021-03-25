package edu.eci.arsw.BiblioEci.Service.impl;

import java.util.List;

import edu.eci.arsw.BiblioEci.Model.Prestamo;
import edu.eci.arsw.BiblioEci.Persistence.BiblioPersistenceException;
import edu.eci.arsw.BiblioEci.Persistence.PrestamoPersistence;
import edu.eci.arsw.BiblioEci.Service.BiblioServiceException;
import edu.eci.arsw.BiblioEci.Service.PrestamoService;

public class PrestamoServiceImpl implements PrestamoService {
	
	PrestamoPersistence prp;

	@Override
	public List<Prestamo> getAllPrestamos() throws BiblioServiceException {
		try{
            return prp.getAllPrestamos();
        }catch (BiblioPersistenceException e){
            throw new BiblioServiceException(e.getMessage());
        }
	}


}
