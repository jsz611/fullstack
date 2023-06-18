import styled from "styled-components";


export const About =  styled.div`
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 6rem  ;
   background-color: #a5b5ab;


`;

export const Description = styled.div`
    flex: 1;
    width: auto;
    padding: 55px;
    margin: 30px;
    z-index: 2;
    h2 {
        font-weight: bold;
        color: solid gray;
    }
    p{
        margin: auto;
        padding: auto;
        width: 300px;
    }

`;

export const Image = styled.div`
    z-index: 2;
    flex: 2;
    //overflow: hidden;
    img {
        width: 100%;
        height: 75;
        object-fit: cover;
        background-size: cover;
    }

`;


export const Button = styled.button`
   color: gray;
  font-size: 1em;
  margin: 1em;
  padding: 0.2em 0.2em;
  border: 2px solid gray;
  border-radius: 5px;
  .styleButtonContact {
    border-radius: 5px;
    border: 2px solid gray;

   }

`;