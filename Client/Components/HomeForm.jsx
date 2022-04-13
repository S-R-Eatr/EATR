
import React from 'react';
import { useState } from 'react';
import { setSceneActionCreator, getRestaurantsActionCreator } from '../Actions/actions.js';

const HomeForm = (props) => {

    return (
        <div className="home-form">
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <label htmlFor="location">Location: </label><br></br>
                <input type="text" id="locationinput"></input><br></br>
                <label htmlFor="category">Category:</label><br></br>
                <input type="text" id="categoryinput"></input><br></br>
                <input type="submit" value="Submit" id="submit"></input>
            </form>
        </div>
    );
};

export default HomeForm;
