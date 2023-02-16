import React, { Component } from 'react';
import './Head.css';

export default class Head extends Component {
     render() {
          return (
               <div className='head' >
                    
                    {/* First Part of the header */}
                    <div className="head_container_1">

                         <div className="image_container ">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/W3Schools_logo.svg/1200px-W3Schools_logo.svg.png" alt="pho" />
                         </div>

                         <div className="common_container_1">
                              <div>
                                   <span>Tutorial</span> 
                              </div>
                         </div>

                         <div className="common_container_1">
                              <div>
                                   <span>Reference</span> 
                              </div>
                         </div>

                         <div className="common_container_1">
                              <div>
                                   <span>Exercise</span> 
                              </div>
                         </div>

                         <div className="common_container_1">
                              <div>
                                   <span>Sign Up</span> 
                              </div>
                         </div>

                    </div>

                    {/* Second Part of the header  */}
                    <div className="head_container_2">

                              <div className="container_2_item" id='pro'>
                                   Pro
                              </div>
                              <div className="container_2_item" id='certify' >
                                   Get Certified
                              </div>
                              <div className="container_2_item" id='website'>
                                   Create Website
                              </div>
                              <div className="container_2_item" id='login' onClick={ () => this.props.status() } >
                                   Log Out
                              </div>
                         </div>
                    
               </div>
          )
     }
}
