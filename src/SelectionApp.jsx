import { useState } from 'react';
import "./style.css"

function SelectionApp() {

    const [myCounter, setMyCounter] = useState(1);

    const [message, setMessage] = useState([
        "Learn React",
        "Now Have Handsome Income:)",
        "Invest Your New Income:D",
    ])


    function nextHandler() {
        console.log("nextHandler is running!");

        if (myCounter < 3) {
            setMyCounter(myCounter + 1)
        }

    }



    function previousHandler() {
        console.log("previousHandler is running!");

        if (myCounter >= 1) {
            setMyCounter(myCounter - 1)
        }
    }


    return (
        <>
            <div className='mainDiv' style={{ display: "flex", justifyContent: "space-around", marginTop: "200px"}}>


                {
                    Array.from([1, 2, 3], container => (
                        <div style={{ height: '50px', width: '50px', borderRadius: '50%', backgroundColor: myCounter >= container ? "orange" : "gray", textAlign: 'center', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: "-80px" }}>{container}</div>
                    ))
                }

            </div>

            <h1 style={{ textAlign: 'center',  marginTop: "60px"}}>
                {
                    message[myCounter - 1]
                }
            </h1>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {
                    Array.from(["previous", "next"], btn => (
                        <button className='btns' onClick={btn == "previous" ? previousHandler : nextHandler} style={{ border: "2px solid black", width: "300px", height: "60px", marginTop: "100px", borderRadius: "100px", cursor: "pointer" }}>{btn}</button>
                    ))
                }
            </div>




        </>
    )


}


export default SelectionApp



// import { useState } from "react";

// function App() {

// }