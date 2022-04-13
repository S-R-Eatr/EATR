import React, { component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainContainer from './Containers/MainContainer.jsx';
import RestaurantCard from './Components/RestaurantCard.jsx';
import Authentication from './Components/authentication.jsx';

const App = () => {

  // const isLoggedIn = useSelector(store => store.setScene.isLoggedIn);
  const isLoggedIn = false;
  if (isLoggedIn){
    return (
      <div>
        <MainContainer />
        {/* <RestaurantCard /> */}
      </div>
    );
  }
    else {
      return (
      <div>
        <Authentication />
      </div>
      )
    };
}

export default App;
