import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import ("../styles/login.css");
const Login=() => {

    let token = localStorage.getItem("token")

    const [form, setForm] = useState({});
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("");
    let nav = useNavigate()

    const handleemail = (e) => {
        let email=e.target.value;
        setEmail(email)

    }
    const handdlepass = (e) => {
        const pass = e.target.value
        let oj = {
            email: email,
            pass: pass
        }
        setForm(oj)
        setPass(pass)
    }

    const entry = (e) => {
        e.preventDefault();
                if (email === "") {
                    alert("provide email")
                    return
                } else if (pass=== "") {
                    alert("provide password")
                    return
                }
                const config = { headers: { "Content-Type": "application/json" } }
                axios.post("http://localhost:8080/login", form, config)
                    .then((res) => {
                        localStorage.setItem("token" ,res.data.message)
                        localStorage.setItem("member" , res.data.data)
                        console.log(res.data);   
                    })
                    .catch((e) => { alert(e.response.data.message) });

                    token = localStorage.getItem("token")
                    if(token !==null){
                        nav('/home')
                    }
    }
    const fun =()=>{
        nav("/register")
    }

    return (
        <div className='form-holder2'>
            <div className='form2'>
                <p>LOGIN MEMBER</p>
                <form action="/resister">
                    <div className='email'>
                        <input className='input'
                            onChange={handleemail}
                            name='email'
                            type="email"
                            placeholder="email"
                            value={email}
                            required
                            ></input>
                    </div>
                    <div className='pass'>
                        <input
                            className='input'
                            onChange={handdlepass}
                            name='pass'
                            type="text"
                            placeholder="passWord"
                            value={pass}
                            required
                            ></input>
                    </div>
                    <button className='button' onClick={entry}>login</button>
                    <p onClick={fun} className='nav2'>I Am Not A MEMBER</p>
                </form>
            </div>
        </div>

    )
}

export default Login