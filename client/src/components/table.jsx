import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import("../styles/table.css")
const Table=(props)=> {
    const nav = useNavigate()

    const {data,setData}=props
    const token= localStorage.getItem("token")
    const member = localStorage.getItem("member")

    useEffect(()=>{
        const config = { headers: { "Content-Type": "application/json" ,
        "Authorization":token
      } }
const body = {
}

                    axios.get(`http://localhost:8080/home/bookList/${member}` ,body, config)
                        .then((res) => {
                           // console.log(res.data)
                            setData(res.data.data);  
                        })
                        .catch((e) => { 
                          alert(e.response.data) });

    },[token, member],[]);

    const handleclick=(e)=>{
        localStorage.setItem('book', e.target.parentElement.children[0].innerText)
        console.log(localStorage.getItem('book'));
        nav('/show')
    }

    
    const handleclick2=(e)=>{
        let info = e.target.parentElement.children[0].innerText

        const config = { headers: { "Content-Type": "application/json" ,
        "Authorization":token
      } }
                    axios.delete(`http://localhost:8080/home/book/${info}`, config)
                        .then((res) => {
                            console.log(res.data);  
                           <a href='/home'>{ nav('/home')}</a>
                        })
                        .catch((e) => { 
                          alert(e.response.data) });
        
      let info2= e.target.parentElement.style.display="none"
      

    }
    const handleclick3=(e)=>{

    }


  return (
    <div className='tableholder'>
        <table className='table'>
          <tbody>
          {
                data.map((data, key)=>{
                    return (
                        <tr key={key} className="row1">
                            <td onClick={handleclick}>{data.title}</td>
                            <td onClick={handleclick}>{data.author}</td>
                            <td onClick={handleclick}>{data.discription}</td>
                            <td onClick={handleclick2}>DELETE</td>
                            <td onClick={handleclick3}>EDIT</td>

                        </tr>
                    )
                })
            }
          </tbody>

        </table>

    </div>
  )
}

export default Table