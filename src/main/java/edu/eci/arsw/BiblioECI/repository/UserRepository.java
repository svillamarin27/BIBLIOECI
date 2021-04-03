package edu.eci.arsw.BiblioECI.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import edu.eci.arsw.BiblioECI.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>{
	
	@Query(value = "SELECT * FROM users u where names= :userName", nativeQuery = true)
	Optional<User> getUsersByName(String userName);
	
}
