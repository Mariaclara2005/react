
import { Link } from 'react-router-dom'
import { Container } from './styled'




export default function Produto(props) {
  return (
    <Container>
      <img className="capa" src={props.info.imagem} alt="" />
      <div className="titulo"> {props.info.titulo} </div>
      <div className="preco"> {props.info.preco} </div>
        
      <Link to={{
        pathname: '/detalhe',
        state: props.info
      }}>
        <button> Ver Detalhes </button>   
      </Link>
    </Container>
  )
}


