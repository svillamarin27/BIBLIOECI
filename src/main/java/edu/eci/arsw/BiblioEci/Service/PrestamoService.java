package edu.eci.arsw.BiblioEci.Service;

import java.util.List;

import edu.eci.arsw.BiblioEci.Model.Prestamo;

public interface PrestamoService {

	List<Prestamo> getAllPrestamos() throws BiblioServiceException;

}
