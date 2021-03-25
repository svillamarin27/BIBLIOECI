package edu.eci.arsw.BiblioEci.controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.eci.arsw.BiblioEci.Service.BiblioServiceException;
import edu.eci.arsw.BiblioEci.Service.PrestamoService;

@RestController
public class PrestamoController {

	@Autowired
	PrestamoService prs;
	
	@RequestMapping(path = "/prestamos", method = RequestMethod.GET)
    public ResponseEntity<?> getAllPrestamos(){
        try{
            return new ResponseEntity<>(prs.getAllPrestamos(),HttpStatus.ACCEPTED);
        }catch (BiblioServiceException ex){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
