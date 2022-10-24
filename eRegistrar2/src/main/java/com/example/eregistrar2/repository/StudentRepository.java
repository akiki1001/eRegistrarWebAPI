package com.example.eregistrar2.repository;

import com.example.eregistrar2.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {

    List<Student> findStudentByFirstNameContaining(String value);
}
