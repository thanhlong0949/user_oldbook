import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import {addNewHobby, setActiveHobby} from "../redux/actions/hobby";

HomePage.propTypes = {

};

const randomnNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000 ));
}

function HomePage(props) {
    const dispatch = useDispatch();
    const newId = randomnNumber();
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const handleAddHobbyList = () => {
        const newHobby = {
            id: newId,
            title: `hobby ${newId}`,
        }

        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>REDUX HOOK- HOME PAGE</h1>
            <button type="" onClick={handleAddHobbyList}>Random Hobby</button>
            <HobbyList 
                hobbyList={hobbyList} 
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;