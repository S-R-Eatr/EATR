import React, { component, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsNewUser, setFavList, setUser, setIsLoggedIn} from '../Actions/actions.js';
import axios from 'axios';


const Authentication = () => {
  const isNewUser = useSelector(store => store.setScene.isNewUser)
  const dispatch = useDispatch();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = (document.getElementById('loginusername').textContent);  
    let password = (document.getElementById('loginpassword').textContent);
    try {
      console.log('clicked login!')
      const response = await axios.post('/auth/login', {
        username,
        password
      })
      //if response object has something that tells us the username/passwords incorrect/doesn't exist, will need to inform the user
      //QUESTION: what exactly is being sent back to us other than the favList? 
      //QUESTION: what is sent back to us if username doesn't exist or password is incorrect?
      console.log('HANDLESLOGIN RESPONSE: ', response)
      password = "";
      if (response === 'Success'){ //can change this logic based on what else is coming back from server side
        dispatch(setIsLoggedIn());
      }
      // dispatch(setFavList(response.list));
      // dispatch(setUser(response.username));
      // setUser(response.data);
      // localStorage.setItem("user", JSON.stringify(response.data));
    } catch(err){
      console.log('Error at handleLogin! this is: ', err);
    }
  
  }
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signupusername').textContent;  
    let password = document.getElementById('signuppassword').textContent;
    try{
      const response = await axios.post('/auth/signup', {
        username,
        password
      })
      console.log('HANDLESSIGNUP RESPONSE: ', response)
      password = "";
      if (response === 'Success'){ //can change this logic based on what else is coming back from server side
        dispatch(setIsLoggedIn());
      }
      // dispatch(setFavList(response.list));
      // dispatch(setUser(response.username));
      // setUser(response.data);
      // localStorage.setItem("user", JSON.stringify(response.data));
    } catch(err){
      console.log('ERROR AT handleSignup: ', err)
    }
  }

   useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  
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
      </form>
      <button className="switch" onClick={loginSwapper}>Sign Up Instead</button>
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
       
      </form>
      <button className="switch" onClick={loginSwapper}>Log In</button>
    </div>
  </div>
  )
}

//https://upmostly.com/tutorials/react-onchange-events-with-examples
// import React from 'react';

// function App() {

//   function handleChange(event) {
//     console.log(event.target.value);
//   }
  
//   return (
//     <input name="firstName" onChange={handleChange} />
//   );
// }

// export default App;

export default Authentication;