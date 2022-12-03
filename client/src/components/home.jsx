import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Table from './table'



import ("../styles/home.css")
const Home=()=> {
    const nav= useNavigate()
    const token = localStorage.getItem("token")
    const [data , setData]= useState([])

    const handleAddBook=(e)=>{
        e.preventDefault();
        nav('/addBook')
    }

    const logout =()=>{
        localStorage.clear();
        nav('/')
    }
  return (
   <>
   {
    (token) ?
    <div className='main-home-container'>
    <div className='headingforhome'>
        <h1>BOOK  LIST</h1>   
        <button type='button' onClick={logout} className='logout'>LOGOUT</button>     
    </div>
    <div className='home-add-btn-holder'>
        <button className='addBook-btn' onClick={handleAddBook}> + ADD NEW BOOK</button>
    </div>
    
    <div className='book-list-holder'>
        <Table data={data} setData={setData}></Table>
    </div>
</div>
:<div>
    <p className='notlogin'>
        login first !!!!!!!!!!!!!!!!!
    </p>
</div>
   }
   </>
  )
}

export default Home