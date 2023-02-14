import React from 'react';
import { memo } from 'react';

function Todos({ todos, addTodo }) {

     console.log("Child render");

     return (
          <>
               <h1>My Todos</h1>
               {
                    todos.map((todo, index) => {
                         return <p key={index}>{todo}</p>
                    })
               }
               <button onClick={ () => addTodo(8) } >Add Todo</button>
          </>
     )
}

export default memo(Todos) ; 