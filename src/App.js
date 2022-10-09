import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = (props) => {

    return (
      <BrowserRouter>
      <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapper-content'>
              <Routes>
                  <Route path="profile" element={<Profile posts={props.posts} />} />
                  <Route path="dialogs" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
              </Routes>
          </div>
      </div>
      </BrowserRouter>
  )
}

export default App;
