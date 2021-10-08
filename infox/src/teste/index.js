import { useState } from "react"


export default function Index() {
  const [qtd, setQtd] = useState(0)

  const aumentar = () => {
    setQtd(qtd + 1);
  }
  
  return (
    <div>
      <button onClick={aumentar}> Mais </button>
        <br /> 
        
        {qtd}
        <Filho a={qtd} />
    </div>
  )
}


function Filho(props) {
  const [a, setA] = useState(props.a)
  return (
    <div>
      <br /> ----- <br /> 
      {a}
    </div>
  )
} 