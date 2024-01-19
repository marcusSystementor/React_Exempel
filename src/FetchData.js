import {useState, useEffect} from "react";
import "./Fetch.css";

const FetchData = () => {
const [data, setData] = useState([]);
const url = "https://jsonplaceholder.typicode.com/users/";

function getThatJSON() {
    return fetch(url)
    .then((res) => res.json())
    .then((d) => setData(d));
    
}

useEffect (() => {
    getThatJSON();
}, [])

    return (
        <div className="App">
        {data.map((dataObj) => (
            <div className="container">
            <h4 key={dataObj.id} className="name"> {dataObj.name}</h4>
            <h4 key={dataObj.id} className="email"> {dataObj.email}</h4>
            <h5 key={dataObj.id}>{dataObj.phone}</h5>
            
            </div>
        ))}    
        </div>
    )
}

export default FetchData;