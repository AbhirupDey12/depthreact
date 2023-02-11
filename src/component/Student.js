import React from 'react';
import Comp from './Comp';
import propTypes from 'prop-types' ;

const Student = ({ name, age , number }) => {
     return (
          <>
               <h1>
                    Student Name :- {name}
               </h1>
               <h1>
                    Age :- {age}
               </h1>
               Addition :- {age + number}
               Number :- {number}
               <Comp name = {name} />
          </>
     )
}

// To solidify the type of props that we have passed.
Student.propTypes = {
     name : propTypes.string ,
     age : propTypes.number ,
     number : propTypes.number
}

Student.defaultProps = {
     name : "Hello world" ,
     age : 100 ,
     number : 58765
}

export default Student;