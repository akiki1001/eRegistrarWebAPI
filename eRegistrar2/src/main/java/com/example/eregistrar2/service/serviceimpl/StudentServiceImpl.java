package com.example.eregistrar2.service.serviceimpl;

import com.example.eregistrar2.model.Student;
import com.example.eregistrar2.repository.StudentRepository;
import com.example.eregistrar2.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

     private StudentRepository studentRepository;
     @Autowired
    public StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository=studentRepository;
    }

    @Override
    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    @Override
    public Student getById(long id) {
         var student=studentRepository.findById(id).get();
        return  student;
    }

    @Override
    public void update(long id,Student studentRequest) {
        Student studentRespond=studentRepository.findById(id).get();

        studentRespond.setFirstName(studentRequest.getFirstName());
        studentRespond.setMiddleName(studentRequest.getMiddleName());
        studentRespond.setLastName(studentRequest.getLastName());
        studentRespond.setLastName(studentRequest.getLastName());
        studentRespond.setStudentNumber(studentRequest.getStudentNumber());
        studentRespond.setCgpa(studentRequest.getCgpa());
       studentRespond.setDateOfEnrollment(studentRequest.getDateOfEnrollment());
        studentRepository.save(studentRespond);
    }

    @Override
    public void delete(long id) {
        studentRepository.deleteById(id);

    }

    @Override
    public void create(Student student) {
        studentRepository.save(student);

    }

    @Override
    public List<Student> searchStudent(String value) {
        return studentRepository.findStudentByFirstNameContaining(value);
    }
}
