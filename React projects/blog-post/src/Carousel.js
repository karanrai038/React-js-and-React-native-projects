import React from "react";
import P1 from './img/1.jpg';
import P2 from './img/2.jpg';
import P3 from './img/3.jpg';
const Carousel=()=>
{
    return (
        <div>
            <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={P1} height={500} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={P2} height={500} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={P3} height={500} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
export default Carousel