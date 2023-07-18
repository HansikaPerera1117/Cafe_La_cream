import React from 'react'
import NavBar from '../components/navBar/NavBar';
import PageMain from '../views/pageMain/PageMain';
import PageProducts from '../views/pageProducts/PageProducts';


function MainPage() {
  return (
    <div>
        <NavBar/>
        <PageMain/>
        <PageProducts/>
    </div>
  )
}

export default MainPage
