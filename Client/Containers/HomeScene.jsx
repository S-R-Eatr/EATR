import React from 'react';
import HomeForm from '../components/HomeForm.jsx'
import { setScene, getRestaurantsActionCreator } from '../actions/actions.js';
import {useDispatch, useSelector} from 'react-redux';

//this is the scene that will show the form to allow user to search by category + location
const HomeScene = () => {

    //moved the handle submit logic to homescene, which acts as a container for the homeform component
    const dispatch = useDispatch();

    //logic to handle submission from the HomeFrom component --> will dispatch to reducers
    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.getElementById('locationinput').value;
        const category = document.getElementById('categoryinput').value;
  
        dispatch(getRestaurantsActionCreator({term: category, location}));
        //after submission, will send user directly to the feed by changing the scene to 'feed'
        dispatch(setScene('feed'));
    }

    return (
        <>

            <HomeForm handleSubmit={handleSubmit}/>
        </>
    )

}

export default HomeScene;