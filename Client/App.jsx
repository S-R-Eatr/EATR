import React, { component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainContainer from './containers/MainContainer.jsx';
import RestaurantCard from './components/RestaurantCard.jsx';
import Authentication from './components/authentication.jsx';
import './style/styles.css';

const App = () => {

  const isLoggedIn = useSelector(store => store.setScene.isLoggedIn);
  // const isLoggedIn = ;
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
