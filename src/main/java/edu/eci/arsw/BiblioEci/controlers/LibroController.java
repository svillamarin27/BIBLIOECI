package edu.eci.arsw.BiblioEci.controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import edu.eci.arsw.BiblioEci.Service.BiblioServiceException;
import edu.eci.arsw.BiblioEci.Service.LibroService;


@RestController
public class LibroController {

	
	@Autowired
	LibroService lbs;
	
	@RequestMapping(path = "/books", method = RequestMethod.GET)
    public ResponseEntity<?> getAllBooks(){
        try{
            return new ResponseEntity<>(lbs.getAllBooks(),HttpStatus.ACCEPTED);
        }catch (BiblioServiceException ex){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
