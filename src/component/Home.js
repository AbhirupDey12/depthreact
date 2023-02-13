import React from 'react';
import { Link , Outlet } from 'react-router-dom';

const Home = () => {

  const bioData = [
    {
      id: 1,
      firstName: "Russel",
      lastName: "Schinner",
      email: "russel.schinner@gmail.com"
    },
    {
      id: 2,
      firstName: "Christain",
      lastName: "Kiehn",
      email: "Christain.Kiehn@gmail.com"
    },
  ]

  return (
    <div className='details_container' >
      {
        bioData.map((ele) => {
          return (
            <Link to={`/${ele.id}`} key={ele.id}>
              <div  className='de_container' >
                <span> {ele.firstName} </span>
                <span> {ele.lastName} </span>
                <span> {ele.email} </span>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}

export default Home;