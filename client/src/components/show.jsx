import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import ("../styles/show.css")
function Show() {

    const [data , setData]=useState([]);
    const nav = useNavigate()

    let token = localStorage.getItem("token")
    let book = localStorage.getItem("book")

    useEffect(()=>{

        const config = { headers: { "Content-Type": "application/json" ,
        "Authorization":token
      } }
const body = {
}

                    axios.get(`http://localhost:8080/home/book/${book}` ,body, config)
                        .then((res) => {
                           // console.log(res.data)
                            setData(res.data.data);  
                        })
                        .catch((e) => { 
                          alert(e.response.data) });

    },[book , token ],[])
  return (
    <>{
        (token) ? 

        <div className='main-show-holder'>
            <div className='button-to-home'>
                <button type='button' className='btn-to-home' onClick={()=>{
                    nav("/home")
                }}> SHOW THE LIST</button>
            </div>
            <div className='show-header-holder'>
                <h1>BOOK'S RECORDES</h1>
                <h4>BOOK'S INFO</h4>
            </div>
        <div className='table-holder'>
            <table className='table'
            id='newtable'>
                <tbody>
                    <tr>
                        <td> 1</td>
                        <td> TITLE</td>
                        <td>{data.title} </td>
                    </tr>
                    <tr>
                        <td> 2</td>
                        <td> ISBN</td>
                        <td>{data.isbn} </td>
                    </tr>
                    <tr>
                        <td> 3</td>
                        <td> AUTHOR</td>
                        <td>{data.author} </td>
                    </tr>
                    <tr>
                        <td> 4</td>
                        <td> PUBLISHER</td>
                        <td>{data.publisher} </td>
                    </tr>
                    <tr>
                        <td> 5</td>
                        <td> DESCRIPTION</td>
                        <td>{data.description} </td>
                    </tr>
                    <tr>
                        <td> 6</td>
                        <td> PUBLISHED_DATE</td>
                        <td>{data.published_date} </td>
                    </tr>

                </tbody>
            </table>
            
        </div>
    </div>
    :
    <div>
    <p className='notlogin'>
        login first !!!!!!!!!!!!!!!!!
    </p>
</div>
    }
    </>
  )
}

export default Show