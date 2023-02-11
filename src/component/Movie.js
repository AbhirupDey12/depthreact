import React from 'react'

const Movie = ( {title , poster , year } ) => {
  return (
    <div className='movie'>
     <img src= {poster}
     alt="" />
     <p> {title} </p>
     <p> {year} </p>
    </div>
  )
}

export default Movie ;