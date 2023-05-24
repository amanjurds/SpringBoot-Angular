package com.aman.usersbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.aman.usersbackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}