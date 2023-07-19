import React, { Component } from 'react'
import { Button} from 'semantic-ui-react'
import './start.scss'
import  startImg from '../../assets/images/start.jpg'

import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

export class Start extends Component {

  componentDidMount() {
    AOS.init();
  }

  render() {

    const myStyleStartBg={
      backgroundImage:`url(${startImg})`,
      height: '100vh',
      width: '100vw',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

    return (
      <>
      <div id='start' style={myStyleStartBg}>
        <div className="container">
          <div id='start-text' className='row justify-content-end text-end ' style={{color:'#cbb39d'}}> 
                <h1 data-aos="zoom-in-left"  data-aos-duration="2000" className='col-lg-12 col-md-12 col-sm-12' style={{fontFamily:'Overlock SC',fontSize:100,fontWeight:'bold'}}>Cafe La Creme</h1>
                <h2 data-aos="zoom-in-left"  data-aos-duration="2000" className='col-lg-12 col-md-12 col-sm-12' style={{fontFamily:'Belleza',fontSize:35}} >Brewed to Perfection</h2>
                <h4 data-aos="zoom-in-left"  data-aos-duration="2000" className='col-lg-12 col-md-12 col-sm-12 mt-1' style={{fontFamily:'Oooh Baby',fontSize:23}} >Enjoy your moment with A Mug Shot of Cafe La Cream</h4>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5 ">
                  <div className="row justify-content-center">
                    <Link to="/view" className='col-5'>
                      <Button data-aos="flip-right" data-aos-delay ="1200" data-aos-duration="2000" className='col-12 rounded' id='start-btn' basic>Enjoy Your Day</Button>
                    </Link>
                  </div>
                </div>
          </div>
        </div>
      </div>

      
      </>
    )
  }
}

export default Start

  

