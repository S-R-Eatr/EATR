import React, { Component } from 'react';
import { connect } from 'react-redux';
import DropDown from '../Components/Dropdown.jsx';
// import RestaurantCard from '../Components/RestaurantCard.jsx';
import Header from '../Components/Header.jsx';
import HomeScene from './HomeScene.jsx';
import FeedScene from './FeedScene.jsx';
import FavoritesScene from './FavoritesScene.jsx'


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
        else if (this.state.scene === 'favorites' && e.target.id === 'back') {this.setState({scene: 'feed'})}
        else (this.setState ({scene: 'feed'}))
        console.log(this.state.scene);
    }


    renderSwitch() {
        switch(this.state.scene) {
            case 'feed':
                return (
                <>
                <button
                onClick={this.handleSceneChange}
                id='back'
                >Back                
                </button>
                
                <button
                onClick={this.handleSceneChange}
                id='favorites'
                >Favorites                
                </button>
                
                < FeedScene />

                <button
                // onClick={this.handleSceneChange}
                id='thumbsup'
                >✓                
                </button>

                <button
                // onClick={this.handleSceneChange}
                id='thumbsdown'
                >X                
                </button>

                </>
                )
            case 'favorites':
                return (
                <>
                <h3>Favorites</h3>
                {/* < FavoritesScene /> */}
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
                < HomeScene />
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
                < Header />
                {this.renderSwitch()}
            </div>
        )
    }

}

export default MainContainer;

