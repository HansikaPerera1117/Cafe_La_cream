import React, { Component } from 'react'
import {Card} from 'semantic-ui-react'
import Product from "../../components/cards/Product";
import * as  CardData from "../../constants/CardData";
// import beveragesData   from "../../constants/CardData";
import "./pageProducts.scss"


export class PageProducts extends Component {
  
  render() {

 console.log(CardData.beveragesData,'pageproduct');

    const beverages = CardData.beveragesData.map((item) => (
      <Product
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));

    const buns = CardData.bunsData.map((item) => (
      <Product
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));

    const mainMeals = CardData.mainMealData.map((item) => (
      <Product
        imageSrc={item.imageSrc}
        header={item.header}
        meta={item.meta}
        description={item.description}
      />
    ));


    return (
      <div>

        <div className="row justify-content-center" style={{height:2430,backgroundColor:'#f3d8a5'}}>
            <div className="col-10 ">
                <div className="col-12  text-center mt-5">
                    <h5  style={{fontFamily:'Merienda',color:'white'}}>Choose Best Items </h5>
                    <h1 className='fw-bolder' style={{fontFamily:'Belleza',color:'#551e19'}}>Most Populer Products</h1>
                </div>
                <div className="col-12">
                    <h4 className='mt-4 mb-4' style={{fontFamily:'Merienda',textDecoration:'underline'}}>Beverages</h4>
                    <Card.Group  itemsPerRow={4} >
                        {beverages}
                    </Card.Group>
                </div>

                <div className="col-12">
                    <h4 className='mt-5 mb-4' style={{fontFamily:'Merienda',textDecoration:'underline'}}>Buns</h4>
                    <Card.Group  itemsPerRow={4} >
                        {buns}
                    </Card.Group>
                </div>

                <div className="col-12">
                    <h4 className='mt-5 mb-4' style={{fontFamily:'Merienda',textDecoration:'underline'}}>Main Meals</h4>
                    <Card.Group  itemsPerRow={4} >
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
