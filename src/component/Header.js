import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {

     const navLinkStyles = ({ isActive }) => {
          return {
               textDecoration: isActive ? 'none' : 'underline',
               color: isActive ? 'green' : "white",
               fontSize: "1.7rem"
          };
     };

     return (

          <div className='header'>

               <NavLink style={navLinkStyles} to={'/'} >Home</NavLink>
               <NavLink style={navLinkStyles} to={'/about'} >About</NavLink>
               <NavLink style={navLinkStyles} to={'/contact'} >Contact</NavLink>

          </div>

     );
};

export default Header;