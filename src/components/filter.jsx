import '../style/style.css'
import { useNavigate } from 'react-router-dom'

const Rame =() =>
{
    const navigate = useNavigate()
    const logout = ()=>{
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    return(
        <div className='for-rame-flex'>
            <div>
                <div className="filter">
                    <div className="filter-1"style={{color: "wheat", }}>
                        <div>
                            <label htmlFor="date"style={{color: "wheat", }}>created at:</label>
                            <input type="date" id="date"/>
                        </div>
                        <div>
                            <label htmlFor="income" >income</label>
                            <input type="checkbox" id="income"/>
                            <label style={{color: "wheat", }}htmlFor="expense" >expense</label>
                            <input type="checkbox" id="expense"/>
                        </div>
                        <div>
                            <label  htmlFor="min">min:</label>
                            <input type="text" id="min" style={{color: "wheat", }} className="red" />
                            <label htmlFor="max"style={{color: "wheat", }} >max:</label>
                            <input type="text" id="max"style={{color: "wheat", }} />
                        </div>
                    </div>
                    <div>
                        <button className="btn" onClick={()=> console.log(12)}>filter</button>
                    </div>
                </div>
            </div>
            <div>
            <button className="button-85 for-newe" role="button" onClick={()=>{logout()}}>
                log out
            </button>
            </div>
        </div>
    )
}

export default Rame