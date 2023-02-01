import React from "react";

const Hello = () => {
     // return 
     // (
     //      <div>
     //           <h1> Hello Vishwas </h1>
     //      </div>
     // )

     // Here , from the line number 5 to 9 what we have written is called the JSX

     // The second line shows the method using which we can the HTML / Recact Component without using JSX 
     // element , prpperty  , Children

     return React.createElement(
          'div',
          { className: 'hello', data: "Learn React", id: "King" },
          React.createElement('h1', null, "Hello Vishwas")
     );

}

export default Hello;