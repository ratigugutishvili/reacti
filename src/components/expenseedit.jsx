import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import Select from "react-select"
import React from "react";


const Edit = ()=>{
    const navigate = useNavigate()
    const [type,settype] = useState('')
    const [radiotype, setradio] = useState('')
    const [amount,setamount] = useState('')
    const [date,setdate] = useState('')
    const {id} = useParams();
    var body = {createdAt:date,type:radiotype,category:type,amount:amount}

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:3001/editF/${id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `${sessionStorage.getItem('token')}`,
              },
            });
    
            const data = await response.json();
    
            setamount(data.amount)
            settype(data.category)
            setdate(data.createdAt)
            setradio(data.type)
            console.log(data); 
          } catch (error) {
            console.log(error + 'qwerqwerqewr');
          }
        };
    
        fetchData();
      },[]);

    function expensecheck() {
        setradio('expense')
        var body = {createdAt:date,type:'expense',category:type,amount:amount}
    }
    function incomecheck() {
        setradio('income')
        var body = {createdAt:date,type:'income',category:type,amount:amount}
    }
    const option = [
        {value: "bank", label: 'bank'},
        {value:"gym", label: 'gym'},
        {value:"debt", label: 'debt'},
    ]
    const opitons = [
        {value:"salary", label:'salary'},
        {value:'invoice', label:'invoice'}
    ]

    function edit() {
        fetch(`http://localhost:3001/edit/${id}`, {method: "PUT",  body:JSON.stringify(body), headers: {"Content-Type": "application/json", "Authorization":`${sessionStorage.getItem('token')}`}} )
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error + "qwerqwerqewr"));
        setdate('')
        setradio('')
        settype('')
        setamount('')
    }

   




    const handlerchange = (selectedoption)=>{
        settype(selectedoption.value)
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
                    <input type="radio" id="inc" name="raido"  onChange={()=>{incomecheck()}} />
                    <label  style={{color: 'red'}}  for="exp">expence</label>
                    <input type="radio" id="exp" name="raido" onChange={()=>{expensecheck()}} />
                </div>
            </div>
            <div class="type-2">
                <p>type:</p>
                <div id="testing">
                    {radiotype == 'expense' && <Select options={option}  onChange={handlerchange}  />}
                    {radiotype == 'income'&& <Select options={opitons} onChange={handlerchange} /> }
                    {radiotype == '' && <Select options={opitons} onChange={handlerchange} />  }
                </div>
            </div>
            <div class="amount-2">
                <label for="amount">amount:</label>
                <input type="number" class="agharvici" id="amount" value={amount} onChange={(e)=>{setamount(e.target.value)}} />
            </div>
            <button style={{marginTop: '40px'}} onClick={()=>{edit()}} >Edit</button>
            <div onClick={navito} className="here-to-check"> here to check</div>
            <div class="transition" ><span>new transition added</span></div>
        </div>
    </div>
    )
}

export default Edit



function readLocalStorage() {
    var expenses = localStorage.getItem('expenses')
    if (expenses === null) {
        return []
    }
    return JSON.parse(expenses)
}