package edu.eci.arsw.BiblioECI.repository;

import java.util.Optional;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import edu.eci.arsw.BiblioECI.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer>{
	
	@Query(value = "select * from book b where names= :bookName", nativeQuery = true)
	Optional<Book> getBooksByName(String bookName);

	@Query(value = "select * from book b where author= :authorName", nativeQuery = true)
	Optional<Book> getBooksByAuthorName(String authorName);

	@Query(value = "select * from book b where languages = :english", nativeQuery = true)
	List<Book>  getBooksEnglish(String english);

	@Query(value = "select * from book b where languages = :french", nativeQuery = true)
	List<Book>  getBooksFrench(String french);

	@Query(value = "select * from book b where languages = :spanish", nativeQuery = true)
	List<Book>  getBooksSpanish(String spanish);
	
	@Query(value ="select * from book b where category = :category", nativeQuery = true)
	List<Book> getBooksByCategory(String category);
}
