
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
            <form>
                <label htmlFor="location">
                    Location  
                    <input id="location" 
                    placeholder="Enter restaurant area" />
                </label>
                <br></br>
                <br></br>
                <label htmlFor="category">
                    Category  
                    <input id="category" 
                    placeholder="Enter cuisine" />
                </label>
                <br></br>
                <br></br>
            </form>
        </div>
    );
};

export default DropDown;
