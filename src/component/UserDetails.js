import React from 'react' ;
import { useParams } from 'react-router-dom';

const UserDetails = () => {

     const {userId} = useParams() ;
     console.log(userId) ;

     return (
          <div>
               <h4>{userId}</h4>
          </div>
     )
}

export default UserDetails