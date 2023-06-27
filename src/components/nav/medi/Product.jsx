import React from 'react'

const Product = (props) => {
  return (
    <div className='product-main'>
        <img className='product-img' src={props.url} alt="" />
        {/* <span >{props.name}</span> */}
    </div>
  )
}

export default Product