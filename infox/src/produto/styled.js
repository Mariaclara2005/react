import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5em;
  margin: 1em;
  box-shadow: 0px 0px 5px 1px #d5d4d6;

  align-items: center;


  .capa {
    width: 7em;
    height: 8em;
  }

  .titulo {
    font: 700 1.5em Roboto;
    color: #000;
  }

  .preco {
    font: 400 1.5em Roboto;
    color: #000;
  }

  button {
    border-radius: 2em;
    border: none;
    outline: none;
    padding: .5em 1.5em;
    
    font: 400 1em Roboto;
    background-color: #f837b2;
    color: #fff;
    cursor: pointer;
  }
`


export { Container }