import React from 'react'

const Products = (props) => {
  return (
    <div className='product-main'>
        <img className='product-pic' src={props.url} alt="" />
        <span >{props.name}</span>
    </div>
  )
}

export default Products