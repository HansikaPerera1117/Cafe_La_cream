import React, { Component } from 'react'
import {Card} from 'semantic-ui-react'
import Product from "../../components/cards/Product";
import * as  CardData from "../../constants/CardData";
import "./pageProducts.scss"
import underline from "../../assets/images/underline.png"

import AOS from 'aos';
import 'aos/dist/aos.css';

export class PageProducts extends Component {

  componentDidMount() {
    AOS.init();
  }
  
  render() {

    const beverages = CardData.beveragesData.map((item) => (
      <Product
        key = {item.id}
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));

    const buns = CardData.bunsData.map((item) => (
      <Product
        key = {item.id}
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));

    const mainMeals = CardData.mainMealData.map((item) => (
      <Product
        key = {item.id}
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));


    return (
      <div>

        <div className="row justify-content-center bg-light" style={{height:2430}}>
            <div className="col-10 ">
                <div data-aos="zoom-in-up"   data-aos-duration="1500"  className="col-12  text-center mt-5">
                    <h5  style={{fontFamily:'Merienda',color:'#cbb39d'}}>Choose Best Items </h5>
                    <h1 className='fw-bolder' style={{fontFamily:'Belleza',color:'#551e19'}}>Most Populer Products</h1>
                    <img src={underline} />
                </div>
                <div className="col-12">
                    <h4 data-aos="fade-right"  data-aos-duration="1500" className='mt-4 mb-4' style={{fontFamily:'Merienda',textDecoration:'underline'}}>Beverages</h4>
                    <Card.Group  data-aos="fade-up" data-aos-duration="1500"  itemsPerRow={4} >
                        {beverages}
                    </Card.Group>
                </div>

                <div className="col-12">
                    <h4 data-aos="fade-right"  data-aos-duration="1500" className='mt-5 mb-4' style={{fontFamily:'Merienda',textDecoration:'underline'}}>Buns</h4>
                    <Card.Group  data-aos="fade-up" data-aos-duration="1500"itemsPerRow={4} >
                        {buns}
                    </Card.Group>
                </div>

                <div className="col-12">
                    <h4 data-aos="fade-right"  data-aos-duration="1500" className='mt-5 mb-4' style={{fontFamily:'Merienda',textDecoration:'underline'}}>Main Meals</h4>
                    <Card.Group  data-aos="fade-up" data-aos-duration="1500" itemsPerRow={4} >
                        {mainMeals}
                    </Card.Group>
                </div>
            </div>
        </div>
        
         
       
      </div>
    )
  }
}

export default PageProducts
