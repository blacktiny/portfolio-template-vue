<template>
  <div class="modal">
    <div class="modal-content row">
      <div class="btn prev-btn" v-on:click="onPrev">
        <img src="@/assets/images/icons/right-arrow.png" alt="prev" />
      </div>
      <div class="img-container">
        <img :src="require(`@/assets/images/${data.imgURL}`)" alt="portfolio" />
      </div>
      <div class="btn next-btn" v-on:click="onNext">
        <img src="@/assets/images/icons/right-arrow.png" alt="next" />
      </div>
    </div>
    <div class="btn close-btn" v-on:click="onClose">
      <img src="@/assets/images/icons/close.png" alt="close" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioModal',
  props: ['data'],
  data: () => ({
  }),
  methods: {
    onClose () {
      this.$emit('close-modal')
    },
    onPrev () {
      this.$emit('prev-portfolio')
    },
    onNext () {
      this.$emit('next-portfolio')
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
  animation: zoom-in 0.25s ease both;
  transform-origin: center;

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
