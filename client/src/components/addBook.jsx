import React from 'react'
import { useState } from 'react'
import {useNavigate}  from "react-router-dom"
import axios from "axios"



import('../styles/addbook.css')
const AddBook=()=> {
  const nav = useNavigate()
  const token = localStorage.getItem("token")
  const member = localStorage.getItem('member')

  const [book , setBook]=useState({member:member})

  const handdleSubmite=(e)=>{
    e.preventDefault();
    console.log(book)
    const config = { headers: { "Content-Type": "application/json" ,
    "Authorization":token
  } }
                axios.post("http://localhost:8080/home/addBook", book, config)
                    .then((res) => {
                        console.log(res.data);  
                       <a href='/home'>{ nav('/home')}</a>
                    })
                    .catch((e) => { 
                      alert(e.response.data) });
}

  return (
  <>
  <div className='addbook-header-holder'>
    <div>
      <button className='show-list-btn' onClick={()=>{nav("/home")}}> show book list </button>
    </div>
    <div>
    <h1>ADD BOOK DEATAILS</h1>
    </div>
  </div>
  
    <div className='main-addbook-holder'>
    <div>
    <form>
        <div>
          <input className='title input1'
          placeholder='Name of the Book'
          onChange={(e)=>{
            let info=e.target.value
            setBook({...book , title:info})
          }}
          >
          </input>
        </div>
        <div>
          <input  className='author input1'
          placeholder='Name the author of the Book'
          onChange={(e)=>{
            let info=e.target.value
            setBook({...book , author:info})
          }}>
          </input>
        </div>
        <div>
          <input  className='discription input1'
          placeholder='Discription of the Book'
          onChange={(e)=>{
            let info=e.target.value
            setBook({...book , discription:info})
          }}>
          </input>
        </div>
        <div>
          <input 
           className='isbn input1'
           placeholder='ISBN'
           onChange={(e)=>{
             let info=e.target.value
             setBook({...book , isbn:info})
           }}
          >
          </input>
        </div>
        <div>
          <input
          type="date"
           className='published_date input1'
           placeholder='published_date of the Book'
           onChange={(e)=>{
             let info=e.target.value
             setBook({...book , published_date:info})
           }}
          >
          </input>
        </div>
        <div>
          <input
          className='publisher input1'
          placeholder='publisher of the Book'
          onChange={(e)=>{
            let info=e.target.value
            setBook({...book , publisher:info})
          }}
          >
          </input>
        </div>
        <div>
          <a href='./home'>
          <button
          className='submit input1'
          type="button"
          onClick={handdleSubmite}
          value="SUBMIT"
          >
            SUBMIT
            </button>
          </a>
          
        </div>
      </form>
    </div>
    </div>
  </>
  )
}

export default AddBook