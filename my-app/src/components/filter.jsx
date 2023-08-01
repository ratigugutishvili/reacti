import '../style/style.css'

const Rame =() =>
{
    function log ()
    {
        console.log(12);
    }
    return(
        <div className="filter">
        <div className="filter-1">
            <div>
                <label htmlFor="date">created at:</label>
                <input type="date" id="date"/>
            </div>
            <div>
                <label htmlFor="income" >income</label>
                <input type="checkbox" id="income"/>
                <label htmlFor="expense" >expense</label>
                <input type="checkbox" id="expense"/>
            </div>
            <div>
                <label  htmlFor="min">min:</label>
                <input type="text" id="min" className="red" />
                <label htmlFor="max" >max:</label>
                <input type="text" id="max" style={{color: "red", }}/>
            </div>
        </div>
        <div>
            <button className="btn" onClick={()=> console.log(12)}>filter</button>
        </div>
    </div>
    )
}

export default Rame