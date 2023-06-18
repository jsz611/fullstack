import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export default function Nav(){
    const menuOptions = {
        about: '<About Me />',
        contact: '<Contact Me />',
        portifolio: '<Portfolio />'
    }

    return(
        <StyleNav>
            <h1><Link to={"/"}>Josiel Souza</Link></h1>
            <ul>
                <li><Link to={"/"}>{menuOptions.about}</Link></li>
                <li><Link to={"/portfolio"}>{menuOptions.portifolio}</Link></li>
                <li><Link to={"/contact"}>{menuOptions.contact}</Link></li>

            </ul>
        </StyleNav>
    )
}

const StyleNav = styled.nav`
width: max-content;

    min-height: 10vh;
    display: flex;
    margin: auto;
//    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    padding-left: 55px;
    background: #d3e0d1;
    //position: relative; //Menu stay fixed with the page, without following the scrollbar
    //top: 0;

    ul {
        display: flex;
        list-style: none;
 
    }
    li{
        padding-left: 10rem;
      
    }
    a{
        color: #072103;
        text-decoration: none;
        
        
    }

`;