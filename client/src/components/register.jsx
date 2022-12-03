import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import("../styles/register.css")
const Register=()=> {

    let nav = useNavigate()

    const [form, setForm] = useState({});
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confirm, setConfirm] = useState("");

    const handleemail = (e) => {
        setEmail(e.target.value)
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

    const checkpass = (e) => {
        let pass = e.target.value
        setConfirm(pass)

    }

    const resistration = (e) => {
        e.preventDefault();

        if(email === ""){
            alert("provide the valide mail address")
            return
        }else if(pass === ""){
            alert("provide the valide password")
            return
        } else if(pass !== confirm){
           return alert("passWord does not match")
        }

        if (pass === confirm) {
            fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            }).then((data) => data.json())
                .then((response) => console.log(response))
                nav("/")
        } 
    }
    const fun = () => {
        nav("/")
    }
    return (

        <div className='form-holder'>
            <div className='form1'>
                <p>REGISTER NEW MEMBER</p>
                <form action="/resister">
                    <div className='email'>
                        <input className='input'
                            onChange={handleemail}
                            name='email'
                            type="email"
                            placeholder="email"
                            value={email}
                            required></input>
                    </div>
                    <div className='pass'>
                        <input
                            className='input'
                            onChange={handdlepass}
                            name='pass'
                            type="text"
                            placeholder="passWord"
                            required></input>
                    </div>
                    <div className='con'>
                        <input
                            className='input'
                            onChange={checkpass}
                            name='confirm-pass'
                            type="text"
                            placeholder=" confirm PassWord"
                            value={confirm}
                            required></input>
                    </div>
                    <button className='button' onClick={resistration}>Resister</button>
                    <p onClick={fun} className='nav'>I Am A MEMBER</p>
                </form>
            </div>

        </div>

    )
}

export default Register