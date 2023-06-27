import React from 'react'

const MedicinesMain = () => {
  return (
    <div className='medi-main'>
        <div className='medicines-search'>
            <img className='medi-search' src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.svg" alt="" />
            <input className='medi-input' type="text" placeholder='search for medicines, health products and more' />
        </div>
        <div className='medicines-cart'>
            <img className='medi-cart' src="https://img.uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.svg" alt="" />
            <span className='medi-text'>View cart</span>
        </div>
    </div>
  )
}

export default MedicinesMain