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
          <input
            id="location"
            // onChange = {e => setLocation(e.target.value)}
            // value={location}
            placeholder="Enter restaurant area"
          />
        </label>
        <br></br>
        <br></br>
        <label htmlFor="category">
          Category
          <input
            id="category"
            // onChange = {e => setCategory(e.target.value)}
            // value={category}
            placeholder="Enter cuisine"
          />
        </label>
        <br></br>
        <br></br>
        <button></button>
      </form>
    </div>
  );
};

export default DropDown;
