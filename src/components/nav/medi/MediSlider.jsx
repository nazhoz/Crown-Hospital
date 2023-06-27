import React from 'react'

const MediSlider = () => {
  return (
    <div className='medi-slider-main'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner bg-info bg-gradient">
    <div class="carousel-item active">
      <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default MediSlider