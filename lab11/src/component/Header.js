import React from 'react'
import { useNavigate } from 'react-router'

function Header() {
    const nav=useNavigate();
  return (
    <div className='container'>
        <h1>Student Registration system</h1>

        <button className='btn btn-primary m-3' onClick={()=>{nav("/add-student")}}>Register</button>
        <button className='btn btn-primary m-3' onClick={()=>{nav("/admin")}}> Admin</button>
        <hr></hr>
    </div>
  )
}

export default Header