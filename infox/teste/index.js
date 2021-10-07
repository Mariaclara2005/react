import { useState } from "react"


export default function Pai () {
    const [qtd, setQtd] = useState (0);

    function contar () {
        setQtd (qtd+1);
    }
    fuction reset () {
        setQtd (0);
    }

    return (
        <div className="container">
            <h1> Contador </h1>

            <div> {qtd} </div> 
            <button onClick={contar}> Contar </button>

            <Filho onReset={reset} />

        </div>
    )
}

function Filho (props) {
    fuction resetar () {
        props.onReset ();
    } 

    return (
        <div className="container">
            <button onClick={resetar}> Resetar </button>
            <div> {props.qtd} </div>
        </div>
    )
}