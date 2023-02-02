import React from 'react';
import Person from './Person';

function NameList() {
     let name = ['Bruce', "Clark", 'Dyana' , 'Bruce' ]
     let names = [
          {
               id: 1,
               name: "Abhirup",
               age: 21
          },
          {
               id: 2,
               name: "Abhijeet",
               age: 11
          }
     ];

     // let Persons = names.map((name) => {
     //      <Person data={name} />
     // })

     return (
          <div>
               {
                    name.map((name, index) => {
                         return <h1 key={index} > {name} , index --- {index + 1} </h1>
                    })
               }
          </div>
     )

}

export default NameList