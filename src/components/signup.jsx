 import React from "react";
 import { useState } from "react";
 import { useNavigate } from 'react-router-dom'
 import '../style/forsignup.css';




export default function SignUp() {
    return <SsignUp />
}




const SsignUp = () => {
    const navigate = useNavigate()
    const [mail, setmail] = useState('')
    const [name, setname] = useState('')
    const [pass, setpass] = useState('')
    const [txtforusedmail, settxtforusedmail] = useState('')
    const [txtforpass, settxtforpass] = useState('')

    const submita = () => {
        // var users = readLocalStorage()
        // const user = users.find(el => el.mail == mail)
        // if (user != null) {
        //     document.getElementById('eemail').style.color = 'red'
        //     settxtforusedmail('your email is used')
        //     setError("Email exists!")
        //     return
        // }
        // if (pass.length < 8) {
        //     document.getElementById('pas').style.color = 'red'
        //     settxtforpass('your password is too short')
        //     setError("invalid password")
        //     return;
        // }
        // document.getElementById('eemail').style.color = '#11f947'
        // document.getElementById('pas').style.color = '#11f947'
        // var forus = {
        //     id: Date.now(),
        //     name: name,
        //     password: pass,
        //     mail: mail
        // }
        // users.push(forus)
        // localStorage.setItem('users', JSON.stringify(users))
        // localStorage.setItem('userid', forus.id)
        // var userid = localStorage.getItem('userid')
        
        const body = {email:mail,password:pass,username:name}
        fetch('http://localhost:3001/register', {method: "POST", body:JSON.stringify(body), headers: {"Content-Type": "application/json"}} )
        .then(response => response.json())
        .then(data => {
            if(data.mailerror){
                document.getElementById('eemail').style.color = 'red'
                settxtforusedmail('your email is used')
                return
            }
            if (data.passerror) {
                document.getElementById('pas').style.color = 'red'
                settxtforpass('your password is too short')
                return;
            }
            navigate('/login')

        })
        .catch(error => console.log(error + "qwerqwerqewr"));

        document.getElementById('eemail').style.color = '#11f947'
        document.getElementById('pas').style.color = '#11f947'

    //    navigate("/home")
    }
    const login = () =>{
        navigate("/login")
    }

    return (
        <div className="body">
            <div className="form">
            <div className="title">Welcome</div>
            <div className="subtitle">Let's create your account!</div>
            <div className="input-container ic1">
                <input id="firstname" class="input" type="text" placeholder=" " value={name} onChange={(e) => setname(e.target.value)} />
                <div class="cut"></div>
                <label for="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
                <input id="lastname" className="input" type="text" placeholder=" " value={mail} onChange={(e) => {
                    setmail(e.target.value)
                    document.getElementById('eemail').style.color = '#11f947'
                    settxtforusedmail('')
                }} />
                <div className="cut"></div>
                <label for="lastname" className="placeholder" id="eemail">email</label>
            </div>
            <div className="input-container ic2">
                <input id="email" className="input" type="password" placeholder=" " value={pass} onChange={(e) => {
                    settxtforpass('')
                    setpass(e.target.value)
                    if (pass === "") {
                        document.getElementById('pas').style.color = '#808097'
                        return
                    }
                    document.getElementById('pas').style.color = '#11f947'
                }} />
                <div className="cut cut-short"></div>
                <label for="email" className="placeholder" id="pas">password</label>
            </div>
            <button type="text" className="submit" onClick={submita}>submit</button>
            <div className="rati">{txtforusedmail}</div>
            <div className="rati">{txtforpass}</div>
            <div className="revi" onClick={login} ><a href="/login">log in</a> </div>
        </div>
        </div>
    )
}
