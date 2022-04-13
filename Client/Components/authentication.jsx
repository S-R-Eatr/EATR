import React, { component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsNewUser } from '../Actions/actions.js';



const Authentication = () => {

  const isNewUser = useSelector(store => store.setScene.isNewUser)
  const dispatch = useDispatch();

  function loginSwapper(){
    dispatch(getIsNewUser());
  }

  //log in form
  return (
  <div className="login-wrapper">
    <div id="login-holder" style={{ display: isNewUser ? "none" : "contents" }}>
      <h1>Please Log In</h1>
      <form method="POST" action='/login'>
        <label>
          <p>Username:</p>
          <input type="text" name="username"/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" name="password"/>
        </label>
        <div>
          <button id="signin" type="submit">Sign In</button>
        </div>
      </form>
      <button className="switch" onClick={loginSwapper}>Sign Up Instead</button>
    </div>
    <div id="signup-holder" style={{ display: isNewUser ? "contents" : "none" }}>
      <h1>Sign Up For Noms</h1>
      <form method="POST" action='/signup'>
        <label>
          <p>Username:</p>
          <input type="text" name="username"/>
        </label>
        <label>
          <p>Password:</p>
          <input type="password" name="password"/>
        </label>
        <div>
          <button id="signup" type="submit">Sign Up</button>
        </div>
      </form>
      <button className="switch" onClick={loginSwapper}>Sign In Instead</button>
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