package com.example.eregistrar2.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
public class Student {
    @Id
    @GeneratedValue
    private Long id;

    //@NotNull
    private String studentNumber;

    @NotNull
    private String firstName;

    private String middleName;

    //@NotNull
    private String lastName;

    private double cgpa;

    private LocalDate dateOfEnrollment;
//
//    private String isInternational;



//    @OneToOne(mappedBy = "student")
//    Transcript  tanscript;


//    @ManyToOne
//    private ClassRoom classRoom;

    public Student(String studentNumber, String firstName, String middleName, String lastName, double cgpa) {
        this.studentNumber = studentNumber;
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.cgpa = cgpa;
    }


//    public Student(String studentNumber, String firstName, String middleName, String lastName, double cgpa, LocalDate dateOfEnrollment, String isInternational) {
//        this.studentNumber = studentNumber;
//        this.firstName = firstName;
//        this.middleName = middleName;
//        this.lastName = lastName;
//        this.cgpa = cgpa;
//        this.dateOfEnrollment = dateOfEnrollment;
//        this.isInternational = isInternational;
//    }

    public Student() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStudentNumber() {
        return studentNumber;
    }

    public void setStudentNumber(String studentNumber) {
        this.studentNumber = studentNumber;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public double getCgpa() {
        return cgpa;
    }

    public void setCgpa(double cgpa) {
        this.cgpa = cgpa;
    }

    public LocalDate getDateOfEnrollment() {
        return dateOfEnrollment;
    }

    public void setDateOfEnrollment(LocalDate dateOfEnrollment) {
        this.dateOfEnrollment = dateOfEnrollment;
    }
//
//    public String getIsInternational() {
//        return isInternational;
//    }
//
//    public void setIsInternational(String isInternational) {
//        this.isInternational = isInternational;
//    }
}
