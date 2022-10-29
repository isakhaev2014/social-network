import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="profile"
                               element={<Profile store={props.store}/>}/>
                        <Route path="dialogs"
                               element={<DialogsContainer store={props.store} />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
