import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from '../views/loging/Login'
import Start from '../views/start/Start'
import  SignUp  from '../views/signUp/SignUp';
import MainPage from '../views/MainPage';

function RouterHandler() {
  return (
    <>
    
    <Router>
      <Routes>
          <Route  path="/" element={<Start/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/signup"element={<SignUp/>}/>
          <Route  path="/view" element={<MainPage/>}/>
      </Routes>
    </Router>

    
    </>
  )
}

export default RouterHandler
