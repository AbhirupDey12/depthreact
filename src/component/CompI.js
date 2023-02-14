import React, { Component } from 'react'

export default class CompI extends Component {
     render() {
          return (
               <>
                    <h1>Comp</h1>
                    <p>Name : {this.props.name}</p>
               </>
          )
     }
};
