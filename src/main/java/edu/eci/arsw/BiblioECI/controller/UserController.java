package edu.eci.arsw.BiblioECI.controller;

import java.util.List;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import edu.eci.arsw.BiblioECI.repository.UserRepository;
import edu.eci.arsw.BiblioECI.exception.ResourceNotFoundException;
import edu.eci.arsw.BiblioECI.model.User;

@RestController
@RequestMapping("/user/")
public class UserController {

	@Autowired
	private UserRepository UP;
	
	@GetMapping("users")
	public List<User> getAllUsers(){
		return this.UP.findAll();
	}
	
	@GetMapping("usersid/{id}")
	public ResponseEntity<User> getUsersById(@PathVariable(value = "id") int userId)
		throws ResourceNotFoundException{
		User user = UP.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User not found for this id:: " + userId));
		return ResponseEntity.ok().body(user);
	}

	
	@GetMapping("usersname/{name}")
	public ResponseEntity<User> getUsersByName(@PathVariable(value = "name") String userName)
		throws ResourceNotFoundException{
		User user = UP.getOptionalUsersByName(userName).orElseThrow(() -> new ResourceNotFoundException("User not found for this name:: " + userName));
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping("checkusers/{name}")
	public boolean checkUsersByName(@PathVariable(value = "name") String userName) throws ResourceNotFoundException{
		User user = UP.getUsersByName(userName);
		if (user == null) {
			return false;
		}
		else {
			return true;
		}
	}
	
	@PostMapping("addusers")
	public User createUser(@RequestBody User user) {
		return this.UP.save(user);
	}

	@PutMapping("startloan/{id}")
	public ResponseEntity<?> startLoan(@PathVariable(value = "id") int idUser)
		throws ResourceNotFoundException{
		User user = UP.findById(idUser).orElseThrow(() -> new ResourceNotFoundException("User not found for this id:: " + idUser));
		Date date = new Date();
      	long timeMilli = date.getTime();
		user.setPrestamos(timeMilli);
		UP.save(user);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@PutMapping("stoploan/{id}")
	public ResponseEntity<?> stopLoan(@PathVariable(value = "id") int idUser)
		throws ResourceNotFoundException{
		User user = UP.findById(idUser).orElseThrow(() -> new ResourceNotFoundException("User not found for this id:: " + idUser));
		user.setPrestamos(0);
		UP.save(user);
		return new ResponseEntity<>(HttpStatus.ACCEPTED);
	}

	@GetMapping("calculateloan/{id}")
	public long calculateloan(@PathVariable(value = "id") int idUser)
		throws ResourceNotFoundException{
		User user = UP.findById(idUser).orElseThrow(() -> new ResourceNotFoundException("User not found for this id:: " + idUser));
		long time = user.getPrestamos();
		Date date = new Date();
		long timeMilli = date.getTime();
		long answer =  ( timeMilli - time ) / 1000;
		return answer;
	}


}
