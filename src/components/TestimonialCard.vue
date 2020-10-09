<template>
  <div class="content row">
    <div class="photo-container">
      <img :src="require(`@/assets/images/${data.imgURL}`)" />
    </div>
    <div class="column card-box">
      <div class="triangle-left" />
      <p class="quote">
        "{{ data.quote }}"
      </p>
      <div class="quote-author">
        <span>- {{ data.author }},</span>&nbsp;
        <span>{{ data.role }}</span>&nbsp;
        <span class="quote-company">{{ data.company }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestimonialCard',
  props: ['data'],
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

.content {
  width: calc(50% - 2rem);
  height: fit-content;
  margin: 0 1rem 2rem;

  @media (max-width: 1023px) {
    width: 100%;
  }
}

.photo-container {
  flex: 0 0 50px;
}

.photo-container img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-top: 15px;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0px rgba(0, 0, 0, 0.2);
}

.card-box {
  position: relative;
  background: #222222;
  border-radius: 7px;
  box-shadow: 0 2px 30px -2px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 0 0 1.5rem 2.5rem;
}

.triangle-left {
  position: absolute;
  top: 40px;
  left: -20px;
  width: 0;
  height: 0;
  border-bottom: 20px solid transparent;
  border-right: 20px solid #222;
}

.quote {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.7;
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  padding: 0;
  margin: 0 0 1rem 0;
}

.quote-author {
  font-style: italic;
  font-size: 14px;
  line-height: 1.8;
  color: #666666;
}

.quote-company {
  color: #00bd7a;
}

</style>
