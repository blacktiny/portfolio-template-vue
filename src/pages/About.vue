<template>
  <div class="column container about">
    <div class="row about-me">
      <div class="photo">
        
      </div>
      <div class="column right-box">
        <p class="header-text">
          <span>About</span>
          <span>Me</span>
        </p>
        <div class="summary">
          {{ data.summary }}
        </div>
      </div>
    </div>
    <div class="testimonial">
      <div class="section-heading">
        <h2>Client <strong>Testimonial</strong></h2>
      </div>
      <div class="testimonial-content">
        <TestimonialCard v-for="item in data.testimonials" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialCard from '@/components/TestimonialCard.vue'
import jsonData from '@/helper/data.js'

export default {
  name: 'About',
  components: {
    TestimonialCard
  },
  data: () => ({
    data: jsonData
  })
}
</script>

<style lang="scss" scoped>

.about {
  position: relative;
  margin-bottom: 5rem !important;
}

.about-me {
  align-items: center;
  margin-top: 200px;
}

.photo {
  width: 40%;
  height: 300px;
  border: 2px solid #323232;
  margin-right: 10%;
}

.right-box {
  width: 50%;
  text-align: left;

  .header-text {
    & > span:nth-child(1) {
      font-size: 2em;
      margin-right: 10px;
    }
    & > span:nth-child(2) {
      font-size: 2em;
      font-weight: bold;
    }
  }

  .summary {
    font-size: 1.2em;
    color: rgba(255, 255, 255, 0.5);
  }
}

.testimonial {
  margin-top: 200px;

  .section-heading {
    margin-bottom: 5rem;
  }

  &-content {
    display: flex;
    flex-wrap: wrap;
  }
}

</style>
