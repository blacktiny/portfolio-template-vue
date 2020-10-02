<template>
  <div class="portfolio-item">
    <div class="img-container" v-on:click="openFullScreen">
      <img :src="require(`@/assets/images/${data.imgURL}`)" :alt="data.id" />
    </div>
    <h4>{{ data.name }}</h4>
  </div>
</template>

<script>
export default {
  name: 'PortfolioItem',
  props: ['data'],
  data: () => ({
  }),
  methods: {
    openFullScreen () {
      this.$emit('open-modal', {
        id: this.data.id
      })
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
  cursor: pointer;

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
  width: 100%;
  height: 250px;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
