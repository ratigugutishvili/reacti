import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../style/login.css"

const Login = ()=>{
    const navigate = useNavigate()
    const [email,setmail] = useState('')
    const [pass,setpass] = useState('')
    var users = readLocalStorage()
    const check = ()=>{
        var checked = users.find(el =>{
            return email == el.mail
        })
        if(checked == undefined){
            document.getElementById('username').style.borderColor = 'red'
            return
        }
        if (pass != checked.password) {
            document.getElementById('password').style.borderColor = 'red'
            return
        }
        localStorage.setItem('userid', checked.id)
        var userid = localStorage.getItem('userid')
        console.log(userid);
        navigate('/home')
    }
    return (
    <div className="login">
    <input className="inputmail" type="text" placeholder="email" id="username"  value={email} onChange={(e) => {
        document.getElementById('username').style.borderColor = '#a1a3a3'
        setmail(e.target.value)}} />
    <input type="password" className="inputpassword" placeholder="password" id="password" value={pass} onChange={(e) => { setpass(e.target.value)}}  />
    <a className="forgot">forgot password?</a>
    <input type="submit" className="input1" value="Sign In" onClick={check} />
    <div class="shadow"></div>
    </div>

    )
}

export default Login

function readLocalStorage() {
    var users = localStorage.getItem('users')
    if (users === null) {
        return []
    }
    return JSON.parse(users)
}