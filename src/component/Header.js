import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {

     // const navLinkStyles = ({ isActive }) => {
     //      return {
     //           textDecoration: isActive ? 'none' : 'underline',
     //           color: isActive ? 'green' : "white",
     //           fontSize: "1.7rem"
     //      };
     // };

     return (

          <div className='header'>
               <h1> React JS </h1>     
          </div>

     );
};

export default Header;