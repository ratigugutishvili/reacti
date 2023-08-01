import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import React from "react";

const Add = ()=>{
    const navigate = useNavigate()
    var expenses = readLocalStorage()
    const [type,settype] = useState('')
    const [amount,setamount] = useState(0)
    const [date,setdate] = useState('')
    const [income, setincome] = useState(false)
    const [expense, setexpense] = useState(false)
    function forexpensecheck(){
        setexpense(!expense)
    }
    function forincomecheck(){
        setincome(!income)
    }
    useEffect(()=>{
        if (expense) {
            setincome(false)
        }
    },[expense])

    useEffect(()=>{
        if (income) {
            setexpense(false)
        }
    },[income])
    var userId = localStorage.getItem('userid')

    function addexpense() {
        expenses.push({
            id: Date.now(),
            userId,
            createdAt:date,
            type: expense ? "expense" : "income",
            execttype: type,
            amount:amount
        })
        localStorage.setItem('expenses', JSON.stringify(expenses))
        settype('')
        setamount(0)
        setdate('')
        setexpense(false)
        setincome(false)
    }

    function navito(){
        navigate('/home')
    }
    return(
        <div class="for-c">
        <div class="form">
            <div class="date-2">
                <label for="date">created at:</label>
                <input type="date" id="date" value={date} onChange={(e)=>{setdate(e.target.value)}} />
            </div>
            <div class="categ">
                <p>category:</p>
                <div>
                    <label style={{color:'green'}} for="inc">income</label>
                    <input type="checkbox" id="inc"  checked={income} onChange={forincomecheck} />
                    <label  style={{color: 'red'}} for="exp">expence</label>
                    <input type="checkbox" id="exp" checked={expense} onChange={forexpensecheck} />
                </div>
            </div>
            <div class="type-2">
                <p>type:</p>
                <div id="testing">
                    <input list="browsers" name="browser" class="damn" id="type" value={type} onChange={(e)=>{settype(e.target.value)}} />
                </div>
            </div>
            <div class="amount-2">
                <label for="amount">amount:</label>
                <input type="number" class="agharvici" id="amount" value={amount} onChange={(e)=>{setamount(e.target.value)}} />
            </div>
            <button style={{marginTop: '40px'}} onClick={addexpense} >ADD</button>
            <div onClick={navito} className="here-to-check"> here to check</div>
            <div class="transition" ><span>new transition added</span></div>
        </div>
    </div>
    )
}

export default Add



function readLocalStorage() {
    var expenses = localStorage.getItem('expenses')
    if (expenses === null) {
        return []
    }
    return JSON.parse(expenses)
}