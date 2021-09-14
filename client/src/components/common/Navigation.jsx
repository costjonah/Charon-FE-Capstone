import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

class Navbar extends React.Component{
    render() {
        return (
            <div>
                <NavStyle>
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
           </NavStyle>
            </div>
        );
    }
}

const NavStyle = styled.div`
ul {
    width: 100%;

    margin: 0 0 3em 0;
    padding: 0;
    list-style: none;
    background-color: #f2f2f2;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc; }

li {
        display: inline;
        padding: 8px 15px;
        text-decoration: none;
        font-weight: bold;
        color: #069;
        border-right: 1px solid #ccc; }
`

export default Navbar;
