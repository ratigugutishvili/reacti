import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rame from "./filter";
import Expensefeed from "./expencesfeed";


const home = ()=>{
    return (
        <div>
            <Rame />
            <Expensefeed />
        </div>
    )
}


export default home