import React, { component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainContainer from './Containers/MainContainer.jsx';
import RestaurantCard from './Components/RestaurantCard.jsx';
import Authentication from './Components/authentication.jsx';
import './Style/styles.css';

const App = () => {

  // const isLoggedIn = useSelector(store => store.setScene.isLoggedIn);
  const isLoggedIn = false;
  if (isLoggedIn){
    return (
      <div className='mainContainer'>
        <MainContainer />
        {/* <RestaurantCard /> */}
      </div>
    );
  }
    else {
      return (
      <div className='authentication'>
        <Authentication />
      </div>
      )
    };
}

export default App;
