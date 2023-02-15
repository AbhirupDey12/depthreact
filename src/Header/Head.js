import React, { Component } from 'react';
import './Head.css';

export default class Head extends Component {
     render() {
          return (
               <div className='head' >
                    
                    {/* First Part of the header */}
                    <div className="head_container_1">

                         <div className="image_container ">
                              <img src="https://play-lh.googleusercontent.com/y3eaXRp7E7JfproxFtRIf60pVkmgcPNCxIhx_P7Ith_u3jZufHLnZspbc0bC3t2k5A" alt="image" />
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
