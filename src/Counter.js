import React, {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    function plus () {
        setCount(count + 1);
    }

    function minus () {
        setCount(count -1);
    }

    function consoleHello () {
        console.log("Hello world!")
    }

    return (
        <div className="container">
        <h1 className="content">Counter {count}</h1>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Plus</button>     
        <button onClick={consoleHello}>Hello</button>


        </div>
    )
}

export default Counter;