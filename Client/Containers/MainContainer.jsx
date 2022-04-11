import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../Components/HeaderContainer.jsx';
import DropDown from '../Components/Dropdown.jsx';
import HeaderContainerFeed from '../Components/HeaderContainerFeed.jsx';
import RestaurantCard from '../Components/RestaurantCard.jsx';
import HomeScreen from './HomeScene.jsx';
import FeedScene from './FeedScene.jsx';
import FavortieScene from './FavoritesScene.jsx';


class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scene: 'home'
        };
        this.handleSceneChange = this.handleSceneChange.bind(this);
    
    }

    //CSS browser version: <span start swiping>
    
    //value of target button
    handleSceneChange (e) {
        
        console.log(e.target.id);
        if (this.state.scene === 'feed' && e.target.id === 'back') {this.setState({scene: 'home'})}
        else if (this.state.scene === 'feed' && e.target.id === 'favorites') {this.setState({scene: 'favorites'})}
        else (this.setState ({scene: 'feed'}))
    }


    renderSwitch() {
        switch(this.state.scene) {
            case 'feed':
                return (
                <>
                < RestaurantCard />
                <button
                onClick={this.handleSceneChange}
                id='back'
                >Back                
                </button>
                </>
                )
            default:
                return (
                <>
                < DropDown />
                <button
                onClick={this.handleSceneChange}
                //onSubmit call formSubmission() -> dispatch to redux -> call handleSceneChange
                id='submit'
                > >>>                
                </button>
                </>
                );
        }
    }

    render () {

        return (
            <div className="outerDiv">
                {this.renderSwitch()}
            </div>
        )
    }

}

export default MainContainer;

