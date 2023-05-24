package com.aman.usersbackend.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aman.usersbackend.exceptions.ResourceNotFoundException;
import com.aman.usersbackend.model.User;
import com.aman.usersbackend.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/users")
	public List<User> getAllUsers() {
		List<User> users = new ArrayList<>();
		users = userRepository.findAll();
		return users;
	}
	
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUser(@PathVariable long id) {
		Optional<User> optUser = userRepository.findById(id);
		User user = optUser.orElseThrow(() -> new ResourceNotFoundException("User Not Found."));
		return ResponseEntity.ok(user);
	}
	
	@PostMapping("/users")
	public User addUser(@RequestBody User user) {
		return userRepository.save(user);
	}
	
	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
		Optional<User> optUser = userRepository.findById(id);
		User user = optUser.orElseThrow(() -> new ResourceNotFoundException("User Not Found."));
		
		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmailId(userDetails.getEmailId());
		user.setJob(userDetails.getJob());
		
		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}
	
	@DeleteMapping("users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
		Optional<User> optUser = userRepository.findById(id);
		User user = optUser.orElseThrow(() -> new ResourceNotFoundException("User Not Found."));
		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
