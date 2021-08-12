import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';
const Header = () => {
    return (
        <>
            <div className="header">
            <NavLink to="/" className="title">
                shani quiz hub
            </NavLink>             
            </div>
            <hr className="line"/>
            <hr className="line"/>
            
        </>
    )
}

export default Header
