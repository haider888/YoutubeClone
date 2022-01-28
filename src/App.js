import './App.css';
import React, { useEffect } from 'react';
import Login from './screens/login_screen/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './screens/Home/Home';
import { useDispatch } from 'react-redux'
import {addVideo} from './redux/actions/videos_action';
import axios from 'axios'
import Upload from './screens/Upload';


function App() {

  const dispatch=useDispatch()

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path ='/upload' element={<Upload />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
