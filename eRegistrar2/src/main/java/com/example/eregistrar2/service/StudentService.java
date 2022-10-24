package com.example.eregistrar2.service;

import com.example.eregistrar2.model.Student;

import java.util.List;

public interface StudentService {

    public List<Student> getAll();
    public Student getById(long id);
    public void update(long id, Student student);
    public void delete(long id);
    public void create(Student student);

    public List<Student>  searchStudent(String value);



}
