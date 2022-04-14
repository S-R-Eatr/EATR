import React from 'react';
import HomeForm from '../components/HomeForm.jsx'
import { setSceneActionCreator, getRestaurantsActionCreator } from '../actions/actions.js';
import {useDispatch, useSelector} from 'react-redux';

const HomeScene = () => {

    //moved the handle submit logic to homescene, which acts as a container for the homeform component
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const location = document.getElementById('locationinput').value;
        const category = document.getElementById('categoryinput').value;
        //const category = document.getElementById('categoryinput').options[selectedIndex].text
        dispatch(getRestaurantsActionCreator({term: category, location}));
        dispatch(setSceneActionCreator('feed'));
    }

    return (
        <>
            <HomeForm handleSubmit={handleSubmit}/>
        </>
    )

}

export default HomeScene;