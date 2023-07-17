import React, { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux';

import { connect } from 'react-redux'
import { buyMohito } from '../redux/action'


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


export let beveragesData = [];

export function CardData() {

  const object = useSelector(state => state);
  console.log(object);

  useEffect(() => {

    const objectList = Array.isArray(object) ? object.map(item => {
      console.log(item , 'item');
       }
      ) : null;

      console.log(objectList , 'objectList');
    

    const mohito = object.mohito;
    // console.log(mohito , 'mohito object');

    const bubbleTea = object.bubbleTea;
    // console.log(bubbleTea , 'bubbleTea object');

    const pinappleMS = object.pinappleMS;
    // console.log(pinappleMS , 'pinappleMS object');

    const capachino    = object.capachino;
    // console.log(capachino , 'capachino object');

    const chocolateMS = object.chocolateMS;
    // console.log(chocolateMS , 'chocolateMS object');

    const strawberryMS = object.strawberryMS;
    // console.log(strawberryMS , 'strawberryMS object');

    const latte = object.latte;
    // console.log(latte , 'latte object');

    const iceCoffee = object.iceCoffee;
    // console.log(iceCoffee , 'iceCoffee object');


    beveragesData = [
      {
        id: 1,
        imageSrc:mohito.imageSrc,
        header:mohito.name,
        meta:mohito.section,
        description:mohito.description +' '+ mohito.price +' '+ mohito.qty +' items available',
      },
      {
        id: 2,
        imageSrc:bubbleTea.imageSrc,
        header:bubbleTea.name,
        meta:bubbleTea.section,
        description:bubbleTea.description +' '+ bubbleTea.price +' '+ bubbleTea.qty +' items available',
      },
      {
        id: 3,
        imageSrc:pinappleMS.imageSrc,
        header:pinappleMS.name,
        meta:pinappleMS.section,
        description:pinappleMS.description +' '+ pinappleMS.price +' '+ pinappleMS.qty +' items available',
      },
      {
        id: 4,
        imageSrc:capachino.imageSrc,
        header:capachino.name,
        meta:capachino.section,
        description:capachino.description +' '+ capachino.price +' '+ capachino.qty +' items available',
      },
      {
        id: 5,
        imageSrc:chocolateMS.imageSrc,
        header:chocolateMS.name,
        meta:chocolateMS.section,
        description:chocolateMS.description +' '+ chocolateMS.price +' '+ chocolateMS.qty +' items available',
      },
      {
        id: 6,
        imageSrc:strawberryMS.imageSrc,
        header:strawberryMS.name,
        meta:strawberryMS.section,
        description:strawberryMS.description +' '+ strawberryMS.price +' '+ strawberryMS.qty +' items available',
      },
      {
        id: 7,
        imageSrc:latte.imageSrc,
        header:latte.name,
        meta:latte.section,
        description:latte.description +' '+ latte.price +' '+ latte.qty +' items available',
      },
      {
        id: 8,
        imageSrc:iceCoffee.imageSrc,
        header:iceCoffee.name,
        meta:iceCoffee.section,
        description:iceCoffee.description +' '+ iceCoffee.price +' '+ iceCoffee.qty +' items available',
      }

    ];


    console.log(beveragesData,'beverage array');

  },[]);

    // const objectList = Array.isArray(object) ? object.map(item => 

    //   mohito = item.data.mohito
      
    //   ) : null;

    //   console.log(objectList,'object list');

    //   const mohitoOjb = {
    //     id: 1,
    //     imageSrc:mohito.imageSrc,
    //     header:mohito.name,
    //     meta:mohito.section,
    //     description:mohito.description +' '+ mohito.price +' '+ mohito.qty +' items available',
    // }

    const data = JSON.stringify(object);
    
    return (
      <div>
        {/* <p>Data: {data}</p> */}
      </div>
    );
}

// export const beveragesData = [
//     {
//       id: 1,
//       imageSrc:`${mohito}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//     {
//       id: 2,
//       imageSrc:`${bubbleTea}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//     {
//       id: 3,
//       imageSrc:`${pinapleMS}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//     {
//       id: 4,
//       imageSrc:`${cappuccino}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//     {
//       id: 5,
//       imageSrc:`${chocoMS}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//     {
//       id: 6,
//       imageSrc:`${stberyMS}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//     {
//       id: 7,
//       imageSrc:`${latte}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//     {
//       id: 8,
//       imageSrc:`${iceCoffe}`,
//       header:'Double Chese Chicken Burger',
//       meta:'Burgers Section',
//       description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
//     },
//   ];
  

  export const bunsData = [
    {
      id: 1,
      imageSrc:`${beefBerger}`,
      header:'Spaghetti With Spicy Chicken Source',
      meta:'Burgers Section',
      description:'Double Cheese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 2,
      imageSrc:`${sandwitch}`,
      header:'Double Cheese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Cheese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 3,
      imageSrc:`${cheesBurger}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 4,
      imageSrc:`${submarine}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
  
  ];

  export const mainMealData = [
    {
      id: 1,
      imageSrc:`${spaghetti}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 2,
      imageSrc:`${mashPotato}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 3,
      imageSrc:`${noodless}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 4,
      imageSrc:`${biriyani}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },

  ];



