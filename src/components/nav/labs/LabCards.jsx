import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from './Products';

const LabCards = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const productData=[
        {
          id:1,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Fever.svg?v=1569493559",
          name:"FEVER"
        },
        {
          id:2,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Diabetes.svg?v=1569493559",
          name:"DIABETES"
        },
        {
          id:3,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Skin.svg?v=1569493559",
          name:"SKIN"
        },
        {
          id:4,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Kidney.svg?v=1569493559",
          name:"KIDNEY"
        },
        {
          id:5,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Stomach.svg?v=1569493559",
          name:"DIGESTION"
        },
        {
          id:6,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Cancer.svg?v=1569493559",
          name:"CANCER"
        },
        {
          id:7,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Bones.svg?v=1569493559",
          name:"BONE"
        },
        {
          id:8,
          imageurl:"https://www.practo.com/tests/public/images/landingpage_icons/Sexual_wellness.svg?v=1569493559",
          name:"SEXUAL WELLNESS"
        },
      ]
      const products = productData.map((item) => <Products name={item.name} url={item.imageurl}/>
      )
  return (
    <div>
    <Carousel responsive={responsive}>
    {products}

    </Carousel>;
    </div>
  )
}

export default LabCards