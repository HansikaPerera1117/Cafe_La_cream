import React, { Component } from 'react'
import underline from "../../assets/images/underline.png"
import aboutUsImg from "../../assets/images/aboutUsImg.jpg"


import AOS from 'aos';
import 'aos/dist/aos.css'

export class PageAboutUs extends Component {

  componentDidMount() {
    AOS.init();
  }
  
  render() {
    return (
      <div>
        <div className="row  justify-content-center bg-light" style={{height:750}}>
          <div className="col-12">
              <div data-aos="zoom-in-up"   data-aos-duration="1500"  className="col-12  text-center mt-5">
                  <h5  style={{fontFamily:'Merienda',color:'#cbb39d'}}>One Of The Best Cafe In Your Home Town </h5>
                  <h1 className='fw-bolder' style={{fontFamily:'Belleza',color:'#551e19'}}>About Cafe La Cream</h1>
                  <img src={underline} />
                  <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-8">
                        <p>Cafe La Cream Colombo is one of the oldest cafe houses in Sri Lanka. 
                        La Cream is well known for emphasizing on serving quality coffee all the time. 
                          We currently have around 5 branches and is growing rapidly.</p>
                    </div>
                  </div>
                  
              </div>
          </div>
              <div className="row justify-content-center" style={{backgroundColor : '#f3d8a5'}}>
                <div className="col-10">
                  <div className="row align-items-center">
                  <div className="col-6" data-aos="fade-right" data-aos-duration="1500">
                    <h3 className='fw-bold mb-4 col-4' style={{fontFamily:'Belleza',color:'#551e19'}}>Our Coffee Story</h3> 
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      <br/>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                     </p>
                     <br/>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
                <div className="col-6" data-aos="fade-left" data-aos-duration="1500">
                  <div className="row align-items-center justify-content-center" style={{height:480}}>
                    <img  src={aboutUsImg} style={{height:375 , width : 495}} />
                  </div>
                </div>
                  </div>
                </div>
                
              </div>
          
        </div>
        
      </div>
    )
  }
}

export default PageAboutUs
