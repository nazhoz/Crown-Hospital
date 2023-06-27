import React from 'react'

const LabCardsSecond = () => {
  return (
    <div>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='second-lab-cards'>
        <h4>"Everything went very well and smoothly. Technician was right on time. Really happy with the service"</h4>
        <span>Ashish Garnaik</span>
      </div>
    </div>
    <div class="carousel-item">
      <div className='second-lab-cards'>
        <h4>"Good service, Practo is avoiding to stand que for health checkup."</h4>
        <span>Lalita Hedge</span>
      </div>
    </div>
    <div class="carousel-item">
        <div className='second-lab-cards'>
        <h4>"Very professional phelbo. Excellent job in the collecting sample."</h4>
        <span>Malathi Ganapathy</span>
        </div>
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

export default LabCardsSecond