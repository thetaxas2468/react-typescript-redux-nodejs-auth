import React from 'react';
import {BrowserRouter as Router,Route,Routes}from "react-router-dom"
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import ProjectDetails from './components/projects/ProjectDetails';
import PageNotFound from "./components/layout/PageNotFound"
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';
import CreateNotification from "./components/dashboard/CreateNotification";
import Game from './components/Game/Game';
import AddVideo from './components/Videos/AddVideo';
import VideosPage from './components/Videos/VideosPage';
import Cookies from 'js-cookie';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route  path='/' element={<Dashboard/>}></Route>
        <Route  path='/signin' element={<Signin/>}></Route>
        <Route  path='/signup' element={<Signup/>}></Route>
        <Route  path='/game' element={<Game/>}></Route>
        <Route path='/project/:id' element={<ProjectDetails/>}></Route>
        <Route path='/create' element={<CreateProject/>}></Route>
        <Route path='/notification_create' element={<CreateNotification/>}></Route>
        <Route path='/add-video' element={<AddVideo/>}></Route>
        <Route path='/videos' element={<VideosPage/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
