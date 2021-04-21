package edu.eci.arsw.BiblioECI.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import edu.eci.arsw.BiblioECI.repository.BookRepository;
import edu.eci.arsw.BiblioECI.repository.UserRepository;
import edu.eci.arsw.BiblioECI.exception.ResourceNotFoundException;
import edu.eci.arsw.BiblioECI.model.Book;
import edu.eci.arsw.BiblioECI.model.User;

@RestController
@RequestMapping("/book/")
public class BookController {
	
	@Autowired
	private BookRepository BP;
	
	@Autowired
	private UserRepository UP;
	
	@GetMapping("books")
	public List<Book> getAllBooksAvailable(){
		List<Book> books = BP.findAll();
		List<Book> availableBooks = new ArrayList<>();
		for(Book book: books) {
			if(book.isAvailable()) {
				availableBooks.add(book);
			}
		}
		return availableBooks;
	}
	
	@GetMapping("rentbooks/{userid}")
	public List<Book> getAllBooksRents(@PathVariable(value = "userid") int userId)
		throws ResourceNotFoundException{
		User user = UP.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Book not found for this id:: " + userId));
		List<Book> books = BP.findAll();
		List<Book> rentBooks = new ArrayList<>();
		for(Book book: books) {
			if(!book.isAvailable() && book.getId() == Integer.parseInt(user.getBookRent())) {
				rentBooks.add(book);
			}
		}
		return rentBooks;
	}
	
	@GetMapping("booksid/{id}")
	public ResponseEntity<Book> getBooksById(@PathVariable(value = "id") int bookId)
		throws ResourceNotFoundException{
		Book book = BP.findById(bookId).orElseThrow(() -> new ResourceNotFoundException("Book not found for this id:: " + bookId));
		return ResponseEntity.ok().body(book);
	}

	
	@GetMapping("booksname/{name}")
	public ResponseEntity<Book> getBooksByName(@PathVariable(value = "name") String bookName)
		throws ResourceNotFoundException{
		Book book = BP.getBooksByName(bookName).orElseThrow(() -> new ResourceNotFoundException("Book not found for this name:: " + bookName));
		return ResponseEntity.ok().body(book);
	}
	
	@PostMapping("addbooks")
	public Book createUser(@RequestBody Book book) {
		return this.BP.save(book);
	}
	
	@PutMapping("rentbook/{id}/{userid}")
	public ResponseEntity<?> rentBook(@PathVariable(value = "id") int bookId, @PathVariable(value = "userid") int userId) 
		throws ResourceNotFoundException{
		Book book = BP.findById(bookId).orElseThrow(() -> new ResourceNotFoundException("Book not found for this id:: " + bookId));
		List<User> ListUsers = UP.findAll();
		for(User user: ListUsers) {
			if(user.getId() == userId && user.getBookRent() == null) {
				
				if(book.isAvailable()) {
					book.setAvailable(false);
					user.setBookRent(Integer.toString(book.getId()));
					UP.save(user);
					BP.save(book);
					return new ResponseEntity<>(HttpStatus.ACCEPTED);
				}
			}
		}
		return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
	}
	
	@PutMapping("returnbook/{id}/{userid}")
	public ResponseEntity<?> returnBook(@PathVariable(value = "id") int bookId, @PathVariable(value = "userid") int userId) 
		throws ResourceNotFoundException{
		Book book = BP.findById(bookId).orElseThrow(() -> new ResourceNotFoundException("Book not found for this id: " + bookId));
		User user = UP.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found for this id: " + userId));
		if(!book.isAvailable() && Integer.parseInt(user.getBookRent()) == book.getId()) {
			book.setAvailable(true);
			BP.save(book);
			user.setBookRent(null);
			UP.save(user);
			return new ResponseEntity<>(HttpStatus.ACCEPTED);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}
}