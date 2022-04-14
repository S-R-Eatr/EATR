import React from 'react';
//import Header from '../components/Header.jsx';

//this component will provide a form to the user
//allows user to search by location + category -- submit logic in parent container, HomeScene
const HomeForm = (props) => {

    return (
        <div className="home-form">
            <form onSubmit={(e) => props.handleSubmit(e)}>
                <label htmlFor="location">Location: </label><br></br>
                <input type="text" id="locationinput"></input><br></br>
                <label htmlFor="category">Category:</label><br></br>
                <input type="text" id="categoryinput"></input><br></br>
                <button type="submit" value="Submit" id="submit">Submit</button>
            </form>
        </div>
    );
};

export default HomeForm;
