import React, { Component } from 'react'
import { Image , Button} from 'semantic-ui-react'
import './start.scss'
import  startImg from '../../assets/images/start.jpg'



export class Start extends Component {
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
                <h1 className='col-lg-12 col-md-12 col-sm-12' style={{fontFamily:'Overlock SC',fontSize:100,fontWeight:'bold'}}>Cafe La Creme</h1>
                <h2 className='col-lg-12 col-md-12 col-sm-12' style={{fontFamily:'Belleza',fontSize:35}} >Brewed to Perfection</h2>
                <h4 className='col-lg-12 col-md-12 col-sm-12 mt-1' style={{fontFamily:'Oooh Baby',fontSize:23}} >Enjoy your moment with A Mug Shot of Cafe La Cream</h4>
                <div className="col-lg-4 col-md-6 col-sm-12 mt-5 ">
                  <div className="row justify-content-center">
                    <Button className='col-5 rounded' id='start-btn' basic>Enjoy Your Day</Button>
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

  

