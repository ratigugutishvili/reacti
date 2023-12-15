import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Rame from "./filter";
import Expensefeed from "./expencesfeed";


const Home = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('http://localhost:3001/session', {method: "GET",  headers: {"Content-Type": "application/json", "Authorization":`${sessionStorage.getItem('token')}`}} )
        .then(response => response.json())
        .then(data => {
            if (data.message) {
                console.log(data.message);
                navigate('/login')
            }
        })
        .catch(error => console.log(error + "qwerqwerqewr"));
    },[])

    return (
        <div>
            <Expensefeed />
        </div>
    )
}


export default Home