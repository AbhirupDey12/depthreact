import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Error = () => {

  const navigate = useNavigate();

  return (

    <div>
      404 Page Not Found... <br />
      <button onClick={ () => navigate('/contact') } > Go to Contact Page </button>
    </div>
    
  )
}

export default Error;