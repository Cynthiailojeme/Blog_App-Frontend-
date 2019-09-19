<template>
    <div class="pictures">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
<div class="d-block w-100">
        <img src="../assets/girl.jpg" alt="First slide">
      </div>
      <div class="carousel-caption">
          <p>THE JOYS OF</p>
          <h1>PHOTOGRAPHY</h1>
      </div>
    </div>
    <div class="carousel-item">
      <div class="d-block w-100">
        <img src="../assets/nature.jpg" alt="Second slide">
      </div>
      <div class="carousel-caption">
          <p>THE JOYS OF</p>
          <h1>PHOTOGRAPHY</h1>
      </div>
    </div>
    <div class="carousel-item">
<div class="d-block w-100">
        <img src="../assets/food.jpg" alt="Third slide">
      </div>
      <div class="carousel-caption">
          <p>THE JOYS OF</p>
          <h1>PHOTOGRAPHY</h1>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>
</template>

<style scoped>
.pictures {
    width: 100%;
    padding: 40px;
    margin-top: 60px;
}
.d-block {
  height: 600px;
}
img {
    height: 100%;
    width: 100%;
    filter: brightness(30%);
    opacity: 30;
}
.carousel-caption {
    align-items: center;
    margin-bottom: 180px;
}
p {
    font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 3vw;
text-align: center;
letter-spacing: 0.01em;

}
h1 {
    font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 6vw;
text-align: center;
letter-spacing: 0.01em;
color: #FFFFFF;
}
</style>