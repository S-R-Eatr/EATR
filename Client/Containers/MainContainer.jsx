import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../Components/HeaderContainer.jsx';
import DropDown from '../Components/Dropdown.jsx';
import RestaurantCard from '../Components/RestaurantCard.jsx';

// const mapStateToProps = {

// };

class MainContainer extends Component {
  render() {
    return (
      <div className="outerBox">
        <HeaderContainer />
        {/* <DropDown /> */}
        <RestaurantCard />
      </div>
    );
  }
}

export default MainContainer;
