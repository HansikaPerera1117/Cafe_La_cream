import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from '../views/loging/Login'
import Start from '../views/start/Start'
import  SignUp  from '../views/signUp/SignUp';
import MainPage from '../views/MainPage';
import PageProducts from '../views/pageProducts/PageProducts';
import ErrorPage from '../views/ErrorPage';

function RouterHandler() {
  return (
    <>

    {/* react-router-dom-version 05 wala  */}
    {/* <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/login"component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/view" component={MainPage} />
        <Route path="/error" component={ErrorPage} />
      </Switch>
    </Router> */}
    
    {/* react-router-dom-version 06 wala  */}
    <Router>
      <Routes>
          <Route  path="/" element={<Start/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/signup"element={<SignUp/>}/>
          <Route  path="/view" element={<MainPage/>}/>
          <Route  path="/product" element={<PageProducts/>}/>
          <Route  path="/error" element={<ErrorPage/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default RouterHandler
