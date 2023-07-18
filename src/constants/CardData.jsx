// import React, { useEffect ,useState} from 'react'
// import { useSelector } from 'react-redux';

// import { connect } from 'react-redux'
// import { buyMohito } from '../redux/action'


import mohito from '../assets/images/page/mohito.jpg'
import bubbleTea from '../assets/images/page/bubbleTea.jpg'
import cappuccino from '../assets/images/page/cappuccino.jpg'
import chocoMS from '../assets/images/page/chocoMS.jpg'
import stberyMS from '../assets/images/page/stberyMS.jpg'
import pinapleMS from '../assets/images/page/pinapleMS.jpg'
import latte from '../assets/images/page/latte.jpg'
import iceCoffe from '../assets/images/page/iceCoffe.jpg'

import beefBerger from '../assets/images/page/beefBerger.jpg'
import sandwitch from '../assets/images/page/sandwitch.jpg'
import cheesBurger from '../assets/images/page/cheesBurger.jpg'
import submarine from '../assets/images/page/submarine.jpg'

import mashPotato from '../assets/images/page/mashPotato.jpg'
import biriyani from '../assets/images/page/biriyani.jpg'
import spaghetti from '../assets/images/page/spaghetti.jpg'
import noodless from '../assets/images/page/noodless.jpg'


// export function CardData() {

//   // const object = useSelector(state => state);

//   // useEffect(() => {

//   //   const objectList = Array.isArray(object) ? object.map(item => {
//   //     console.log(item , 'item');
//   //      }
//   //     ) : null;

 
    

//   //   const mohito = object.mohito;
//   //   const bubbleTea = object.bubbleTea;
//   //   const pinappleMS = object.pinappleMS;
//   //   const capachino    = object.capachino;
//   //   const chocolateMS = object.chocolateMS;
//   //   const strawberryMS = object.strawberryMS;
//   //   const latte = object.latte;
//   //   const iceCoffee = object.iceCoffee;


//   //   beveragesData = [
//   //     {
//   //       id: 1,
//   //       imageSrc:mohito.imageSrc,
//   //       header:mohito.name,
//   //       meta:mohito.section,
//   //       description:mohito.description +' '+ mohito.price +' '+ mohito.qty +' items available',
//   //     },
//   //     {
//   //       id: 2,
//   //       imageSrc:bubbleTea.imageSrc,
//   //       header:bubbleTea.name,
//   //       meta:bubbleTea.section,
//   //       description:bubbleTea.description +' '+ bubbleTea.price +' '+ bubbleTea.qty +' items available',
//   //     },
//   //     {
//   //       id: 3,
//   //       imageSrc:pinappleMS.imageSrc,
//   //       header:pinappleMS.name,
//   //       meta:pinappleMS.section,
//   //       description:pinappleMS.description +' '+ pinappleMS.price +' '+ pinappleMS.qty +' items available',
//   //     },
//   //     {
//   //       id: 4,
//   //       imageSrc:capachino.imageSrc,
//   //       header:capachino.name,
//   //       meta:capachino.section,
//   //       description:capachino.description +' '+ capachino.price +' '+ capachino.qty +' items available',
//   //     },
//   //     {
//   //       id: 5,
//   //       imageSrc:chocolateMS.imageSrc,
//   //       header:chocolateMS.name,
//   //       meta:chocolateMS.section,
//   //       description:chocolateMS.description +' '+ chocolateMS.price +' '+ chocolateMS.qty +' items available',
//   //     },
//   //     {
//   //       id: 6,
//   //       imageSrc:strawberryMS.imageSrc,
//   //       header:strawberryMS.name,
//   //       meta:strawberryMS.section,
//   //       description:strawberryMS.description +' '+ strawberryMS.price +' '+ strawberryMS.qty +' items available',
//   //     },
//   //     {
//   //       id: 7,
//   //       imageSrc:latte.imageSrc,
//   //       header:latte.name,
//   //       meta:latte.section,
//   //       description:latte.description +' '+ latte.price +' '+ latte.qty +' items available',
//   //     },
//   //     {
//   //       id: 8,
//   //       imageSrc:iceCoffee.imageSrc,
//   //       header:iceCoffee.name,
//   //       meta:iceCoffee.section,
//   //       description:iceCoffee.description +' '+ iceCoffee.price +' '+ iceCoffee.qty +' items available',
//   //     }

//   //   ];


//   // },[]);

//     // const objectList = Array.isArray(object) ? object.map(item => 

//     //   mohito = item.data.mohito
      
//     //   ) : null;

//     //   console.log(objectList,'object list');

//     //   const mohitoOjb = {
//     //     id: 1,
//     //     imageSrc:mohito.imageSrc,
//     //     header:mohito.name,
//     //     meta:mohito.section,
//     //     description:mohito.description +' '+ mohito.price +' '+ mohito.qty +' items available',
//     // }

//     const data = JSON.stringify(object);
    
//     return (
//       <div>
//         {/* <p>Data: {data}</p> */}
//       </div>
//     );
// }

export const beveragesData = [
    {
      id: 1,
      imageSrc:`${mohito}`,
      header:'Mohito(Alcoholic/Non-Alcoholic)r',
      meta:'Beverages Section',
      description:'Mohito (Alcoholic/Non-Alcoholic) Rs 350/= ',
    },
    {
      id: 2,
      imageSrc:`${bubbleTea}`,
      header:'Bubble Tea (Nutella)',
      meta:'Beverages Section',
      description:'Bubble Tea With Nutella and Whip Cream Rs 650/=',
    },
    {
      id: 3,
      imageSrc:`${pinapleMS}`,
      header:'Pinapple Milk Shake With Whip Cream',
      meta:'Beverages Section',
      description:'Pinapple Milk Shake With Whip Cream Rs 750/=',
    },
    {
      id: 4,
      imageSrc:`${cappuccino}`,
      header:'Capachino With Cokkies',
      meta:'Beverages Section',
      description:'Capachino With Chocolate Chip Cokkies Rs 450/=',
    },
    {
      id: 5,
      imageSrc:`${chocoMS}`,
      header:'Chocolate Milk Shake With Choco Bolls',
      meta:'Beverages Section',
      description:'Chocolate Milk Shake With Choco Bolls Rs 850/=',
    },
    {
      id: 6,
      imageSrc:`${stberyMS}`,
      header:'Strawberry Milk Shake With Wonder Cone',
      meta:'Beverages Sectionn',
      description:'Strawberry Milk Shake With Wonder Cone Rs 850/=',
    },
    {
      id: 7,
      imageSrc:`${latte}`,
      header:'Coffee Latte With Marshmallow',
      meta:'Beverages Section',
      description:'Coffee Latte With Marshmallow Rs 750/=',
    },
    {
      id: 8,
      imageSrc:`${iceCoffe}`,
      header:'Ice Coffee with Whip Cream',
      meta:'Beverages Section',
      description:'Ice Coffee with Whip Cream and Choco Rolls Rs 650/=',
    },
  ];
  

  export const bunsData = [
    {
      id: 1,
      imageSrc:`${beefBerger}`,
      header:'Beef Burger With French Fries',
      meta:'Burger Section',
      description:'Beef Burger With French Fries Rs 1200/=',
    },
    {
      id: 2,
      imageSrc:`${sandwitch}`,
      header:'Chicken & Backen Sandwitch',
      meta:'Sandwitch Section',
      description:'Chicken & Backen Sandwitch With French Fries Rs 1250/=',
    },
    {
      id: 3,
      imageSrc:`${cheesBurger}`,
      header:'Double Cheese Chicken Burger',
      meta:'Burger Section',
      description:'Double Cheese Chicken Burger With French Fries Rs 950/=',
    },
    {
      id: 4,
      imageSrc:`${submarine}`,
      header:'Crispy Chicken Submarine',
      meta:'Burger Section',
      description:'Crispy Chicken Submarine With French Fries Rs 1450/=',
    },
  
  ];

  export const mainMealData = [
    {
      id: 1,
      imageSrc:`${spaghetti}`,
      header:'Spaghetti With Spicy Chicken Source',
      meta:'Pasta Section',
      description:'Spaghetti With Spicy Chicken Tomato Source Rs 1350/=',
    },
    {
      id: 2,
      imageSrc:`${mashPotato}`,
      header:'Mash Potato With Fried Prawns',
      meta:'Salad Section',
      description:'Mash Potato With Fried Prawns Rs 1150/=',
    },
    {
      id: 3,
      imageSrc:`${noodless}`,
      header:'Sea Food Spicy Noodles',
      meta:'Noodles Section',
      description:'Sea Food Spicy Noodles Rs 1250/=',
    },
    {
      id: 4,
      imageSrc:`${biriyani}`,
      header:'Chicken Biriyani with Raita',
      meta:'Biriyani Section',
      description:'Indian Chicken Biriyani with Raita Rs 1650/=',
    },

  ];



