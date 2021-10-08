import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  align-items: center;
  width: 60%;

  font: 700 1em Roboto;

  & > div {
    margin: 2em 0em;
    flex-grow: 1;
    text-align: center;
  }

  & > div:nth-child(1) {
    text-align: left;
  }

  span {
    font-weight: 400 !important;
  }
  
  img {
    width: 7em;
    height: auto;
  }

  .remover img {
    width: 3em;
    cursor: pointer;
  }
`

const RemoverIcon = styled.img`
  content: url('/assets/images/delete.svg')
`


export { Container, RemoverIcon }