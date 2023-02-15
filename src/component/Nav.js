import React, { Component } from 'react'

export default class Nav extends Component {

     componentWillUnmount() {
          console.log("Nav is going to be destroyed");
          alert("Nav is going to be destroyed");
     }

     render() {
          return (
               <h3>
                    Nav Bar
               </h3>
          )
     }
}
