
import React from 'react';
import { useState } from 'react';


const DropDown = () => {
    // const [location, setLocation] = useState('');
    // const locationTuple = useState('Chinese');
    // const location = locationTuple[0];
    // const setlocation = locationTuple[1];
    // const [category, setCategory] = useState('');

    return (
        <div className="drop-down">
            <h1>Eatr</h1>
            <form>
                <label htmlFor="location">
                    Location  
                    <input id="location" 
                    // onChange = {e => setLocation(e.target.value)} 
                    // value={location}
                    placeholder="Enter restaurant area" />
                </label>
                <br></br>
                <br></br>
                <label htmlFor="category">
                    Category  
                    <input id="category" 
                    // onChange = {e => setCategory(e.target.value)} 
                    // value={category}
                    placeholder="Enter cuisine" />
                </label>
                <br></br>
                <br></br>
            </form>
        </div>
    );
};

export default DropDown;

//when button is clicked
    //Access and update redux's sceneState:
    //Change sceneState to 'feed'
        //Render RestaurantCard
        //HeaderContainerForRestaurant (c has thumbs up and down buttons in it)