import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../style/forexpens.css'
import ReactLogo from '../assets/cross.svg'

const Expensefeed = ()=>{
    let fornum = 0
    let fornumi = 0
    const [isimg, setimg] = useState(true)
    const userid = localStorage.getItem('userid')
    const navigate = useNavigate()
    const expense = readLocalStorage()
    const filteredexp = expense.filter(el=>{
        return el.userId == userid
    })



    const incomes = filteredexp.filter((el)=>{
        return el.type == 'income'
    })

    const incomess = incomes.sort((a,b)=>{
        return b.amount-a.amount
    })

    const expences = filteredexp.filter((el)=>{
        return el.type == 'expense'
    })

    const expencess = expences.sort((a,b)=>{
        return b.amount-a.amount
    })


    function add() {
        navigate('/add')
    }
    const sorted = filteredexp.sort((a,b)=>{
        return a.amount-b.amount
    })
    const forDelete = (el)=>{
        const indexa = filteredexp.findIndex((element)=>{return el.id == element.id})
        filteredexp.splice(indexa,1)
        console.log(filteredexp);
        localStorage.setItem('expenses', JSON.stringify(filteredexp))
        setimg(!isimg)
    }





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
                            <p>exect type: {el.execttype}</p>
                            <p>amount: {el.amount}</p>
                            <img src={ReactLogo} key={el.id+1} alt=""  className="for-img" onClick={()=> forDelete(el)} />
                        </div>
                    )
            })}
                </div>
                <div className="schalf">
                
                    <div className="for-tops margina" style={{backgroundColor:'green'}}>
                        <p className="p-for-income">incomes</p>
                        {incomess.map(element => {
                            fornum++
                            return(
                                <div key={element.type} className="forme">
                                    <div key={ Date.now()} >{fornum}. {element.amount}</div>
                                    <div key={ Date.now()}>{element.execttype}</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="for-tops">
                        <p className="p-for-income">excpenses</p>
                        {expencess.map(element => {
                            fornumi++
                            return(
                                <div className="forme">
                                    <div key={ Date.now()}>{fornumi}. {element.amount}</div>
                                    <div key={ Date.now()}>{element.execttype}</div>
                                </div>
                            )
                        })}
                    </div>
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