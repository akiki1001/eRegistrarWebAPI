
import React, { useEffect, useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import StudentService from '../service/StudentService'

function ListOfStudents() {

    const [students, setStudents]=useState([])
    const [studentId, setStudentId]=useState('')

    const nav=useNavigate()
 
 
     useEffect(()=>{
         
       
         StudentService.getAllStudent().then(response=>{
             
             console.log(response.data);
             setStudents(response.data);
         }).catch(erorr=>{
             console.log(erorr);
         })
     },[])

     const deleteStudent=(id)=>{
        
    StudentService.deleteStudent(id).then(()=>{
        nav('/')
    }
    ).catch(error=>{
        console.log(error)
    })
}
  return ( 
    
   
     <div className='container'>
 
         <h1> List Of Students</h1>
         <div className="card col-md-6 offset-md-3 offset-md-3">
                <div className="card-body">
                                <input
                                    type="text"
                                    placeholder="Enter Student Number"
                                    name ="studentId"
                                    className="form-control"
                                    value={studentId}
                                    onChange ={(e)=>setStudentId(e.target.value)}
                                ></input>
                        </div>
                        </div>
         <Link onClick={() => {window.location.href = `/search/${studentId}`;
         }} className='btn btn-primary m-3'> Serch By Id</Link>
         <Link onClick={() => {window.location.href = "/add-student";
         }} className='btn btn-primary '> Add Student</Link> 
         <table className='table table-bordered table-striped'>
            <thead  className='table-dark'>
                <tr>
                <th>Student Id</th>
                <th>Student Number</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>GPA</th>
                <th>Date Of Enrollment</th>
                <th>Is International</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(
                        student=>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.studentNumber}</td>
                            <td>{student.firstName}</td>
                            <td>{student.middleName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.cgpa}</td>
                            <td>{student.dateOfEnrollment}</td>
                            <td>{student.isInternational}</td>
                            <td>
                                <Link className='btn btn-info m-2' onClick={()=>{window.location.href = `/edit-student/${student.id}`;}}>Update</Link>
                                <Link className='btn btn-danger' onClick={()=>{
                                    deleteStudent(student.id)
                                    }}>Delete</Link>
                            </td>

                        </tr>
                    )
                }
            </tbody>
        </table>
         
         </div>
  )
}

export default ListOfStudents