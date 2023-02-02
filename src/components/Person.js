import React from 'react'

function Person( {person} ) {
     // Here , our porps is basically an array object
     return (
          <h2> My name is {person.name} and my age is {person.age} and id is {person.id} </h2>
     )
}

export default Person ;