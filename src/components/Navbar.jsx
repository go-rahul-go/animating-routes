import React from 'react'
import "./navbar.css";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <section className='navbar'>
        <div className='navigator'>
            <NavLink to="/">home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/contact">contact</NavLink>

        </div>
    </section>
  )
}

export default Navbar