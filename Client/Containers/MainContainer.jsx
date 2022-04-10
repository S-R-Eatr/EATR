import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderContainer from '../Components/HeaderContainer.jsx';
import DropDown from '../Components/Dropdown.jsx';
import HeaderContainerFeed from '../Components/HeaderContainerFeed.jsx'

// const mapStateToProps = {


// };
/*
class MainContainer extends Component {

    render() {

        return (
            <div className="outerBox">
                <HeaderContainer />
                <DropDown />
            </div>
        )

    }

}

export default MainContainer;
*/



class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scene: 'home'
        };
        this.handleSceneChange = this.handleSceneChange.bind(this);
    
    }

    //value of target button
    handleSceneChange (e) {
        //CSS browser version: <span start swiping>
        
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
                <div>setScene is feed</div>
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

