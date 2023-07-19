import React from 'react'
import NavBar from '../components/navBar/NavBar';
import PageMain from '../views/pageMain/PageMain';
import PageProducts from '../views/pageProducts/PageProducts';
import PageAboutUs from './pageAboutUs/PageAboutUs';


function MainPage() {
  return (
    <div>
        <NavBar/>
        <PageMain/>
        <PageAboutUs/>
        <PageProducts/>
       
    </div>
  )
}

export default MainPage
