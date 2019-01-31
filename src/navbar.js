import React from 'react';
import styled, { css } from 'styled-components';

import logo from './img/googleplay.png';

const Nav = styled.nav`
    height: 90px;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    /* logo */
    img {
        width: 240px;
        height : 160px;
        vertical-align: left;
    }
    .logo {
        display: inline-block;
        line-height: 90px;
        margin: 0 0 0 3%;
    }
`;

const Button = styled.button`
    color: white;
    cursor: pointer;
    background-color: #1ABC9C;
    line-height: normal;
    margin: 2% 6% 0 0;
    padding: 7px 17px;
    font-weight: 100;
    border: transparent;
    border-radius: 3px;
    font-size: 16px;
    text-decoration: one;
    ${props => props.right && css`
        float: right;
    `}
    &:hover {
        background-color: #69D7C1;
    }
`;

const Navbar = () => {
    return (
      <Nav>
        <a href={"/"} className="logo">
            <img src={logo} alt="Logo" />
        </a>
        <Button right>Sign In</Button>
      </Nav>
    )
}

export default Navbar;
