import React, { Component } from 'react'
import {Button} from 'semantic-ui-react'
import mainBg from '../../assets/images/page/mainBg.jpg'
import './pageMain.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

export class PageMain extends Component {

  componentDidMount() {
    AOS.init();
  }

  render() {

    const myStyle={
      backgroundImage:`url(${mainBg})`,
      height: '120vh',
      width: '100vw',
      marginTop:'-70px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  };

    return (
          <div id='pgMain' style={myStyle}>
            <div className="container">
                <div id='pgMainCnt' className="row position-absolute">
                    <div data-aos="fade-down-right" data-aos-delay ="500"  data-aos-duration="2000" className="col-12 text-white">
                        <h1 className='col-lg-12 col-md-12 col-sm-12' style={{fontFamily:'Inter',fontSize:60,fontWeight:'bolder'}}>NEW DAY <br/> NEW COFFEE</h1>
                        <h2 className='col-lg-12 col-md-12 col-sm-12 mt-4' style={{fontFamily:'Buda',fontSize:20}} >Start your day off the right way with a cup of freshly-brewed coffee from Cafe la Cream.Our unique selection of coffee beans brings out the finest aromas and notes that you'll love ! </h2>
                        <h4 className='col-lg-12 col-md-12 col-sm-12 mt-5' style={{fontFamily:'Oooh Baby',fontSize:18}} >Enjoy your moment with A Mug Shot of Cafe La Cream</h4>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                      <div className="row justify-content-start">
                        <Button data-aos="flip-right"  data-aos-delay ="1700" data-aos-duration="2000" className='col-5 ms-5 rounded' id='start-btn'>Order Your Moment</Button>
                      </div>
                    </div>

                </div>
              </div>
        </div>
    )
  }
}

export default PageMain
