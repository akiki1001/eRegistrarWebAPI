import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useNavigate, useParams } from 'react-router'
import StudentService from '../service/StudentService'
import 'react-datepicker/dist/react-datepicker.css'


function AddStudent() {
    const [studentNumber, setStudentNumber] = useState('')
    const [firstName, setfirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setlastName] = useState('')
    const [cgpa, setCgpa] = useState('')
    const [dateOfEnrollment, setDateOfEnrollment] = useState('')
    const [isInternational, setIsInternational] = useState('')
    const {id}=useParams()
    const nav=useNavigate()

    const saveStudent= (e)=>{
        e.preventDefault();
        const student = {studentNumber,firstName,middleName,lastName,cgpa,dateOfEnrollment,isInternational}
        StudentService.addStudent(student).then(res=>{
            console.log(res.data)
            nav("/admin")
        }).catch(error=>{
            console.log(error)
        })
    
       }

       const updateStudent= (e)=>{
        e.preventDefault();
        const student = {studentNumber,firstName,middleName,lastName,cgpa,dateOfEnrollment,isInternational}
        StudentService.updateStudent(id,student).then(res=>{
            console.log(res.data)
            nav("/admin")
        }).catch(error=>{
            console.log(error)
        })
    
       }
    
    //    const radioClicked = (e) => {
        
    //     if(e.target.name == 'yes') {
    //         setIsInternational(true);
    //     } else {
    //         setIsInternational(true);
    //     }
    //    }

       useEffect(() => {
        StudentService.getStudentById(id).then(res=>{
            const student = res.data;
            console.log(student);
            setStudentNumber(student.studentNumber)
            setfirstName(student.firstName)
            setMiddleName(student.middleName)
            setlastName(student.lastName)
            setCgpa(student.cgpa)
            setDateOfEnrollment(student.dateOfEnrollment)
            setIsInternational(student.isInternational)
        }).catch(erorr=>{
            console.log(erorr)
        })
        
      }, [])


      const buttonChoose=()=>{

        if(id){
               return <button className="btn btn-success m-3" onClick={(e)=>updateStudent(e)}>Update</button>
        }else {
            return <button className="btn btn-success m-3" onClick={(e)=>saveStudent(e)}>Save</button>
        }
        
                        
      }

       const title=()=>{
       
        if(id){
            return <h2 className="text-center"> Update Student</h2>
        } else{
           return <h2 className="text-center">Add Student</h2>
        }
       }

  return (
    <div>
        <br/><br/><br/><br/>        
         <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                {
                    title()
                }
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> Student Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Student Number"
                                    name ="studentNumber"
                                    className="form-control"
                                    value={studentNumber}
                                    onChange ={(e)=>setStudentNumber(e.target.value)}
                                ></input>
                                                    
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label"> First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    name ="firstName"
                                    className="form-control"
                                    value={firstName}
                                    onChange ={(e)=>setfirstName(e.target.value)}
                                ></input>
                                                    
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Middle Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Middle Name"
                                    name ="middleName"
                                    className="form-control"
                                    value={middleName}
                                    onChange ={(e)=>setMiddleName(e.target.value)}
                                ></input>
                                                    
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label"> Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    name ="lastName"
                                    className="form-control"
                                    value={lastName}
                                    onChange ={(e)=>setlastName(e.target.value)}
                                ></input>
                                                  
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label"> Comelative GPA</label>
                                <input
                                    type="text"
                                    placeholder="Enter Comelative GPA"
                                    name ="cgpa"
                                    className="form-control"
                                    value={cgpa}
                                    onChange ={(e)=>setCgpa(e.target.value)}
                                ></input>
                                                   
                        </div>

                        <DatePicker 
                            selected={dateOfEnrollment}
                            onChange ={(e)=>setDateOfEnrollment(e)} dateFormat='yyyy/MM/dd'
                            > 
                            
                        </DatePicker>
                        <div className="form-group mb-2">
                            <label className="form-label">Is International</label>
                                <input
                                    type="text"
                                    placeholder="Enter isInternational"
                                    name ="isInternational"
                                    className="form-control"
                                    value={isInternational}
                                    onChange ={(e)=>setIsInternational(e.target.value)}
                                ></input>
                                           
                                                    
                        </div>

                        {
                    buttonChoose()
                       }
                       <button className="btn btn-danger" onClick={()=>nav( "/admin")}>Cancel</button>
                        
                    </form>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AddStudent