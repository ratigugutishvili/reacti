import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../style/forexpens.css";
import ReactLogo from "../assets/cross.svg";
import ReactLogo1 from "../assets/pen-solid.svg";

const Expensefeed = () => {
  const navigate = useNavigate();
  const [expense, setExpense] = useState([]);
  const [min,setmin] = useState()
  const [max,setmax] = useState()
  const [date,setdate] = useState()
  const [type,settype] = useState()
  var body = {createdAt:date,min:min,max:max,type:type}


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/session", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${sessionStorage.getItem("token")}`,
          },
        });

        const data = await response.json();

        setExpense(data.expenses);
        console.log(data.expenses); 
      } catch (error) {
        console.log(error + "qwerqwerqewr");
      }
    };

    fetchData();
  }, []);



  function add() {
    fetch("http://localhost:3001/session", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${sessionStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          navigate("/login");
          return;
        }
        navigate("/add");
      })
      .catch((error) => console.log(error + "qwerqwerqewr"));
  }



  function deletee(id) {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${sessionStorage.getItem("token")}`,
          },
        });

        const data = await response.json();


        console.log(data.id);
      } catch (error) {
        console.log(error + "qwerqwerqewr");
      }
    };

    fetchData();
    window.location.reload();
  }


  const logout = () => {
    sessionStorage.removeItem("token");
    navigate("/login");
  };



  function edit(id) {
    navigate(`/edit/${id}`);
  }

  function expensecheck() {
    settype('expense')
    console.log(body);
}
function incomecheck() {
    settype('income')
    console.log(body);
}

  function filter() {
    const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/filter`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${sessionStorage.getItem("token")}`,
            },
            body:JSON.stringify(body)
          });
  
          const data = await response.json();


          console.log(data.message);
        } catch (error) {
          console.log(error + "qwerqwerqewr");
        }
      };
  
      fetchData();

  }

  return (
    <div>
      <div className="for-rame-flex">
        <div>
          <div className="filter">
            <div className="filter-1" style={{ color: "wheat" }}>
              <div>
                <label htmlFor="date" style={{ color: "wheat" }}>
                  created at:
                </label>
                <input type="date" id="date" value={date} onChange={(e)=>{setdate(e.target.value)}} />
              </div>
              <div>
                <label htmlFor="income">income</label>
                <input type="radio" id="income" name="radio" onChange={()=>{incomecheck()}}/>
                <label style={{ color: "wheat" }} htmlFor="expense">
                  expense
                </label>
                <input type="radio" id="expense" name="radio" onChange={()=>{expensecheck()}} />
              </div>
              <div>
                <label htmlFor="min">min:</label>
                <input
                  type="text"
                  id="min"
                  style={{ color: "wheat" }}
                  className="red"
                  value={min}
                  onChange={(e)=>{setmin(e.target.value)}}
                />
                <label htmlFor="max" style={{ color: "wheat" }}>
                  max:
                </label>
                <input type="text" id="max" style={{ color: "wheat" }} value={max}
                  onChange={(e)=>{setmax(e.target.value)}} />
              </div>
            </div>
            <div>
              <button className="btn" onClick={() => filter()}>
                filter
              </button>
            </div>
          </div>
        </div>
        <div>
          <button
            className="button-85 for-newe"
            role="button"
            onClick={() => {
              logout();
            }}
          >
            log out
          </button>
        </div>
      </div>
      <div className="expensee">
        <button className="button-85 for-new" role="button" onClick={add}>
          add new
        </button>

        <div className="forscroll">
          <div className="foree">
            {expense.map((el) => {
              console.log(el._id);
              return (
                <div key={el.id} className={"first " + el.type}>
                  <p>crated at:{el.createdAt}</p>
                  <p>type: {el.type}</p>
                  <p>exect type: {el.category}</p>
                  <p>amount: {el.amount}</p>
                  <img
                    src={ReactLogo}
                    key={el._id}
                    alt=""
                    className="for-img"
                    onClick={() => {
                      deletee(el._id);
                    }}
                  />
                  <img
                    src={ReactLogo1}
                    key={el._id}
                    alt=""
                    className="for-img1"
                    onClick={() => {
                      edit(el._id);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <div className="schalf">
            <div
              className="for-tops margina"
              style={{ backgroundColor: "green" }}
            >
              <p className="p-for-income">incomes</p>
            </div>
            <div className="for-tops">
              <p className="p-for-income">excpenses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expensefeed;

function readLocalStorage() {
  var expenses = localStorage.getItem("expenses");
  if (expenses === null) {
    return [];
  }
  return JSON.parse(expenses);
}
