import React, { Component } from 'react'
import { Rating,Card ,Icon,Image ,Reveal} from 'semantic-ui-react'
import Product from "../../components/cards/Product";
import { beveragesData } from "../../constants/cardData";
import { bunsData } from "../../constants/cardData";
import { mainMealData } from "../../constants/cardData";
import "./pageProducts.scss"

export class PageProducts extends Component {
  render() {
    const beverages = beveragesData.map((item) => (
      <Product
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));

    const buns = bunsData.map((item) => (
      <Product
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));

    const mainMeals = mainMealData.map((item) => (
      <Product
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));

    return (
      <div>

        <div className="row bg-danger justify-content-center" style={{height:800}}>
            <div className="col-11 bg-success">
                <div className="col-12 bg-warning text-center">
                    <h5  style={{fontFamily:'Merienda',color:'#551e19'}}>Choose Best Items </h5>
                    <h1 className='fw-bolder text-white' style={{fontFamily:'Belleza'}}>Most Populer Products</h1>
                </div>
                <div className="col-12 bg-danger">
                    <h4 className='mt-4 mb-5' style={{fontFamily:'Merienda'}}>Beverages</h4>
                    <Card.Group id='p-cards' itemsPerRow={4} >
                        {beverages}
                    </Card.Group>
                </div>

                <div className="col-12 bg-danger">
                    <h4 className='mt-5 mb-5' style={{fontFamily:'Merienda'}}>Buns</h4>
                    <Card.Group id='p-cards' itemsPerRow={4} >
                        {buns}
                    </Card.Group>
                </div>

                <div className="col-12 bg-danger">
                    <h4 className='mt-5 mb-5' style={{fontFamily:'Merienda'}}>Main Meals</h4>
                    <Card.Group id='p-cards' itemsPerRow={4} >
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
