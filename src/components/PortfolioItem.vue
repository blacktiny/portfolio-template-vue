<template>
  <div class="portfolio-item">
    <div class="img-container" :class="{ zoom: isShowZoomIn }" v-on:click="openFullScreen" v-on:mouseover="isShowZoomIn = true" v-on:mouseleave="isShowZoomIn = false">
      <img :src="require(`@/assets/images/${data.imgURL}`)" :alt="data.id" />
      <div class="cover-zoom" v-if="isShowZoomIn">
        <img src="@/assets/images/icons/zoom-in.png" alt="zoom-in" />
      </div>
    </div>
    <h4>{{ data.name }}</h4>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ['data'],
  data: () => ({
    isShowZoomIn: false
  }),
  methods: {
    openFullScreen () {
      this.$emit('open-modal', {
        id: this.data.id
      })
    },
    showZoomIn () {
      console.log('zoom in')
    }
  }
}
</script>

<style lang="scss">

.portfolio-item {
  width: 30%;
  margin: 0 1rem 2rem;
  box-sizing: border-box;
  animation: zoom-in 0.5s ease-in-out both;
  transform-origin: center;

  @media (max-width: 1024px) {
    width: 50%;
    padding: 0 1rem 1rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}

.img-container {
  position: relative;
  width: 100%;
  height: 250px;
  opacity: 0.8;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .3s ease-in-out;
  }

  .cover-zoom {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #00533680;

    img {
      width: 50px;
      height: auto;
    }
  }
}

.zoom {
  img {
    transform: scale(1.2);
  }
}

h4 {
  font-size: 1.2em;
  text-align: center;
}

.modal {
  display: flex;
  align-items: center;
  justify-content: center;

  &-content {
    width: 90%;
    height: 90%;
    align-items: center;
    justify-content: center;

    .img-container {
      height: auto;
      opacity: 1;
    }
  }
}

@keyframes zoom-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

</style>
