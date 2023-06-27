import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from './Product';

const MediSliderBody = () => {
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
          imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-5.a8ae14dd.png",
        },
        {
          id:2,
          imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-6.51626a1a.png",
        },
        {
          id:3,
          imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-7.476668e1.png",
        },
        {
          id:4,
          imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-4.5e130b77.png",
        },
        {
          id:5,
          imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-2.bcd2bdc9.png",
        },
        {
          id:6,
          imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-3.eeed1ea0.png",
        },
        {
          id:7,
          imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/h-c-1.6befede3.png",
        },
        {
            id:8,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-2.640dcfd5.png",
          },
          {
            id:9,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-6.aa7d1cba.png",
          },
          {
            id:10,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-9.5029c27e.png",
          },
          {
            id:11,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-8.c4cbe33a.png",
          },
          {
            id:12,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-4.c31332e5.png",
          },
          {
            id:13,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-7.c81b7b95.png",
          },
          {
            id:14,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-1.f17a3332.png",
          },
          {
            id:15,
            imageurl:"https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/cat-3.faf3a8b9.png",
          },
      
      ]
      const products = productData.map((item) => <Product url={item.imageurl}/>
      )
  return (
    <div className='medi-caro-main'>
    <Carousel responsive={responsive}>
    {products}

    </Carousel>;
    </div>
  )
}

export default MediSliderBody