package edu.eci.arsw.BiblioECI.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import edu.eci.arsw.BiblioECI.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{
	
	@Query(value = "SELECT * FROM book b where names= :bookName", nativeQuery = true)
	Optional<Book> getBooksByName(String bookName);
}
