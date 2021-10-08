
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 3em;
  font-family: Roboto;

  & > div { 
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  
    margin: 1em;
  }

  h1,h3 {
    text-align: center;
  }

  h2 {
    margin-top: 2em;
  }

  button {
    margin-top: 2em;
    border-radius: 2em;
    border: none;
    outline: none;
    padding: .5em 1.5em;
    
    font: 400 1em Roboto;
    background-color: #f837b2;
    color: #fff;
    cursor: pointer;
  }

  img {
    width: 20em;
    height: auto;
  }

`


export { Container }