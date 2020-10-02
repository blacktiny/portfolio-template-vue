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
      <TestimonialCard v-for="item in data.testimonials" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
import TestimonialCard from '@/components/TestimonialCard.vue'

export default {
  name: 'About',
  components: {
    TestimonialCard
  },
  data: () => ({
    data: {
      summary: `Passionate front-end software developer with 6 years of experience using HTML5/CSS3, Bootstrap, jQuery and Javascript/Typescript to build all aspects of the UX and UI for many kinds of web sites. Specialized in using ReactJS, VueJS, Angular and PHP/Laravel to build many kinds of web platforms and mobile apps.`,
      testimonials: [
        {
          id: 't-1',
          imgURL: 'quote_author-1.jpeg',
          quote: `First time we worked together, Mark came up with several on-target creative concepts under significant deadline pressure. he's creative, deliberate in his strategy and focused on results. he knows that online content is king and understands how to pull leads into the pipeline.`,
          author: 'David Lung',
          role: 'CEO',
          company: 'GoGoGrandparent Inc.',
        }
      ]
    }
  })
}
</script>

<style lang="scss">

.about {
  position: relative;
  margin-bottom: 5rem !important;
}

.about-me {
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
}

</style>
