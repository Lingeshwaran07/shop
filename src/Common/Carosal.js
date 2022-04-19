import React from 'react'
import"./carosal.css"

const Carosal = () => {
  return (
    <>
  <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner slideimages">
    <div class="carousel-item active ">
      <img src="newcarosal1.jpg" class="d-block w-100" alt="..."/>
    </div>
   
    <div class="carousel-item">
      <img src="final2.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="final1.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="newcarosal3.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="newcarosal4.jpg" class="d-block w-100" alt="..."/>
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
    </>
  )
}

export default Carosal