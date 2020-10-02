<template>
  <div class="home">
    <div class="container">
      <div class="products">
        <img class="product-img product1" src="@/assets/images/Product1.png" />
        <img class="product-img product2" src="@/assets/images/Product2.png" />
        <img class="product-img product3" src="@/assets/images/Product3.png" />
      </div>
      <div class="title">
        <h6>HI THERE! I AM</h6>
        <h3>
          <span>
            <p class="is-hidden">Denis Kali</p>
            <p class="is-visible">A Web Developer</p>
          </span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
  }
}
</script>

<style lang="scss">

h3 {
  position: absolute;
  top: 50px;
  font-size: 4em;
  color: #b8bfcf;
  padding: 0;
  margin: 0;
  overflow: hidden;

  p {
    font-weight: bold;
    width: max-content;
    padding: 0;
    margin: 0;
  }
}

h6 {
  font-size: 2em;
  font-weight: 300;
  color: #b8bfcf;
  padding: 0;
  margin: 0;
}

.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #191919;
}

.products {
  position: relative;
  opacity: 0.6;

  .product-img {
    position: absolute;
    width: 35%;
    height: auto;
  }

  .product1 {
    top: 15vh;
    left: 7.5%;
  }
  .product2 {
    top: 35vh;
    left: 0;
  }
  .product3 {
    top: 55vh;
    left: 12.5%;
  }
}

.title {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40vh;
  right: 5%;
  width: 470px;
}

.is-visible {
  display: block;
}

.is-hidden {
  display: none;
}

@keyframes scale-width {
  0% {
    width: 260px;
  }
  100% {
    width: 0;
  }
}

</style>
