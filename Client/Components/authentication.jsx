import React, { component, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsNewUser, setFavsActionCreator, setUser, setIsLoggedIn} from '../actions/actions.js';
import axios from 'axios';


const Authentication = () => {
  //pull state from redux store
  const isNewUser = useSelector(store => store.setScene.isNewUser)
  const dispatch = useDispatch();

  //logic to handle login when login button is pressed
  //will perform a post request to send username/password
  //will also perform subsequent get request for the favlist stored in database
  const handleLogin = async (e) => {
    e.preventDefault();
    let username = (document.getElementById('loginusername').value);  
    let password = (document.getElementById('loginpassword').value);
    try {
      //console.log('clicked login!')
      const response = await axios.post('/auth/login', {
        username,
        password
      })
      //if response object has something that tells us the username/passwords incorrect/doesn't exist, will need to inform the user
      //console.log('HANDLESLOGIN RESPONSE: ', response)
      password = "";
      if (response.status === 200){ //can change this logic based on what else is coming back from server side
        dispatch(setIsLoggedIn());
        dispatch(setFavsActionCreator())
      } 
    } catch(err){
      alert('Incorrect username or password!');
      document.getElementById('loginusername').value = '';
      document.getElementById('loginpassword').value = '';
      console.log('Error at handleLogin! this is: ', err);
    }
  }
  //logic to handle signup when login button is pressed
  //will perform a post request to send username/password
  const handleSignup = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signupusername').value;  
    let password = document.getElementById('signuppassword').value;
    try{
      const response = await axios.post('/auth/signup', {
        username,
        password
      })
      //console.log('HANDLESSIGNUP RESPONSE: ', response)
      password = "";
      if (response.status === 200){ //can change this logic based on what else is coming back from server side
        dispatch(setIsLoggedIn());
      }

    } catch(err){
      console.log('ERROR AT handleSignup: ', err)
    }
  }

  //allow user switch between login/signup forms
  function loginSwapper(){
    dispatch(getIsNewUser());
  }
  
  //log in form
  return (
  <div className="login-wrapper">
  <h1 id="logintitle">Welcome to Eatr</h1>
    <div id="login-holder" style={{ display: isNewUser ? "none" : "contents" }}>
      <h2>Please Log In</h2>
      <form onSubmit={handleLogin}>
        <label>
          <p>Username:</p>
          <input type="text" name="username" id='loginusername' required/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" name="password" id='loginpassword' required/>
        </label>
        <button id="signin" type="submit">Login</button>
        <button className="switch" type="reset" onClick={loginSwapper}>Sign Up Instead</button>
      </form>
    </div>

    <div id="signup-holder" style={{ display: isNewUser ? "contents" : "none" }}>
      <h2>Sign up here!</h2>
      <form onSubmit={handleSignup}>
        <label>
          <p>Username:</p>
          <input type="text" name="username" id='signupusername' required/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" name="password" id='signuppassword' required/>
        </label>

        <button id="signup" type="submit">Sign Up</button>

        <button className="switch" type="reset" onClick={loginSwapper}>Log In Here</button>
       
      </form>  
    </div>
  </div>
  )
}

export default Authentication;