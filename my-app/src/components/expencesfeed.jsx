import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../style/forexpens.css'

const Expensefeed = ()=>{
    const userid = localStorage.getItem('userid')
    const navigate = useNavigate()
    const expense = readLocalStorage()
    const filteredexp = expense.filter(el=>{
        return el.userId == userid
    })
    console.log(filteredexp);
    console.log(expense);
    function add() {
        navigate('/add')
    }
    const sorted = filteredexp.sort((a,b)=>{
        return a.amount-b.amount
    })
    console.log(sorted);
    return (
        <div className="expensee">
            <button className="for-new" onClick={add}>
                add new
            </button>
            
            <div className="forscroll">
                <div className="foree">
                {filteredexp.map(el=>{
                    return (
                        <div key={el.id} className={'first '+ el.type}  >
                            <p>crated at:{el.createdAt}</p>
                            <p>type: {el.type}</p>
                        </div>
                    )
            })}
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Expensefeed






function readLocalStorage() {
    var expenses = localStorage.getItem('expenses')
    if (expenses === null) {
        return []
    }
    return JSON.parse(expenses)
}