package com.example.eregistrar2.controller;

import com.example.eregistrar2.model.Student;
import com.example.eregistrar2.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequiredArgsConstructor
@RequestMapping("/app/v1")
public class StudentRestController {

    private final StudentService studentService;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentService.getAll();
    }

    @PutMapping("/students/{studentid}")
    public void getStudentById(@PathVariable Long studentid, @RequestBody Student studentreq){
      studentService.update(studentid, studentreq);

    }

    @GetMapping("/students/{studentid}")
    public Student getStudentById(@PathVariable Long studentid){
        return studentService.getById(studentid);
    }

    @PostMapping("/students")
    public void addStudent(@RequestBody Student student){
        studentService.create(student);
    }

    @PutMapping("/students/update/{studentId}")
    public void updaetStudent(@PathVariable Long studentId){
        studentService.getById(studentId);
    }

    @DeleteMapping("/students/delete/{studentId}")
    public void deleteStudents(@PathVariable long studentId){
        studentService.delete(studentId);
    }

}
