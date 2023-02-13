import React from 'react';
import {Link , Outlet} from 'react-router-dom' ;

const Contact = () => {

  return (
    <>

      <Link to={'insta'}> <h1>Contact via instagram</h1> </Link> 
      <Link to={'mail'} > <h1>Contact via mail</h1></Link>

      <Outlet />
      
    </>
  )

}

export default Contact;