import React, { useEffect } from 'react'
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

export function CardData() {

    // useEffect(() => {
    //   getDataFromStore()
    // });

    // const getDataFromStore = () =>{

    // }

    const object = useSelector(state => state);
    console.log(object);


    const data = JSON.stringify(object);
    console.log(data);
    
    // const myObject1 = { 
    //     header:'Double Chese Chicken Burger',
    //     meta:'Burgers Section',
    //     description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    //  };
    

    // beveragesData.push(...[myObject1]);
      const obj =  {
          id: 1,
          imageSrc:data.imageSrc,
          header:data.name,
          meta:data.section,
          description:data.description + data.price + data.qty,
        }

        console.log(obj,'object')

        beveragesData.push(...[obj]);

    return (
      <div>
        <p>Data: {data}</p>
      </div>
    );
}

export const beveragesData = [
    {
      id: 1,
      imageSrc:`${mohito}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 2,
      imageSrc:`${bubbleTea}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 3,
      imageSrc:`${pinapleMS}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 4,
      imageSrc:`${cappuccino}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 5,
      imageSrc:`${chocoMS}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 6,
      imageSrc:`${stberyMS}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
        id: 7,
        imageSrc:`${latte}`,
        header:'Double Chese Chicken Burger',
        meta:'Burgers Section',
        description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
        id: 8,
        imageSrc:`${iceCoffe}`,
        header:'Double Chese Chicken Burger',
        meta:'Burgers Section',
        description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
  ];
  

  export const bunsData = [
    {
      id: 1,
      imageSrc:`${beefBerger}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
    },
    {
      id: 2,
      imageSrc:`${sandwitch}`,
      header:'Double Chese Chicken Burger',
      meta:'Burgers Section',
      description:'Double Chese Chicken Burger Lorem ipsum dolor sit amet,',
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



