
import React from 'react';
import { useState } from 'react';


const HomeForm = (props) => {
    // const [location, setLocation] = useState('');
    // const locationTuple = useState('Chinese');
    // const location = locationTuple[0];
    // const setlocation = locationTuple[1];
    // const [category, setCategory] = useState('');

    return (
        <div className="home-form">
            <form>
                <label htmlFor="location">Location: </label><br></br>
                <input type="text" id="location"></input><br></br>
                <label htmlFor="category">Category:</label><br></br>
                <input type="text" id="category"></input><br></br>
                <input type="submit" value="Submit" id="submit" onClick={props.onClick}></input>
            </form>
        </div>
    );
};

export default HomeForm;
