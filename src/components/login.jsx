import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "../style/login.css"

const Login = ()=>{
    const navigate = useNavigate()
    const [email,setmail] = useState('')
    const [pass,setpass] = useState('')
    const check = ()=>{
        const body = {email: email, password:pass}
        fetch('http://localhost:3001/signin', {method: "POST", body:JSON.stringify(body), headers: {"Content-Type": "application/json"}} )
        .then(response => response.json())
        .then(data => {
            if(data.email == 'not'){
                document.getElementById('username').style.borderColor = 'red'
                return
            }
            if (data.pass == 'not') {
                document.getElementById('password').style.borderColor = 'red'
                return
            }
            sessionStorage.setItem('token', JSON.stringify(data.token))
            navigate('/home')

        })
        .catch(error => console.log(error + "qwerqwerqewr"));
  
    }
    return (
    <div className="login">
    <input className="inputmail" type="text" placeholder="email" id="username"  value={email} onChange={(e) => {
        document.getElementById('username').style.borderColor = '#a1a3a3'
        setmail(e.target.value)}} />
    <input type="password" className="inputpassword" placeholder="password" id="password" value={pass} onChange={(e) => { setpass(e.target.value)}}  />
    <a className="forgot">forgot password?</a>
    <input type="submit" className="input1" value="Sign In" onClick={check} />
    <div className="register" onClick={()=>{navigate('/')}}>register</div>
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