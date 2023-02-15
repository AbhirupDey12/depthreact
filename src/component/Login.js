import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {

     constructor(props) {
          super(props)
          this.state = {
               email: "",
               password: ""
          }
     }

     mailHandler = (e) => {
          this.setState({
               email: e.target.value
          })
     }

     passwordHandler = (e) => {
          this.setState({
               password: e.target.value
          })
     }

     submitHandler = (e) => {
          if (this.state.email === "" || this.state.password === "") {
               alert("You have to enter both e-mail and password");
               // this.props.status = false ;
          }
          else {
               alert(`Hello user, your email is ${this.state.email} and your password is ${this.state.password}`);
               this.setState({
                    password: "",
                    email: ""
               });
               this.props.status();
          }
     }

     render() {
          return (
               <div className="body">
                    <div className='form'>

                         <h2 className='heading'>Login Form</h2>

                         <div className='email_box'>
                              <div>
                                   <label htmlFor="email">Email</label>
                              </div>
                              <input
                                   type="email"
                                   id='email'
                                   placeholder='Enter your mail'
                                   value={this.state.email}
                                   onChange={this.mailHandler}
                              />
                         </div>

                         <div className='password_box'>
                              <div>
                                   <label htmlFor="password">Password</label>
                              </div>
                              <input
                                   type="password"
                                   id='password'
                                   placeholder='Enter your password'
                                   value={this.state.password}
                                   onChange={this.passwordHandler}
                              />
                         </div>

                         <button type='submit' className='btnn' onClick={this.submitHandler} > Submit </button>

                    </div>
               </div>
          )
     }
}
