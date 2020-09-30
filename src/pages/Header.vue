<template>
  <div class="header" :class="{ active: active }">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Resume</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    active: false
  }),
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // Any code to be executed when the window is scrolled
      if (window.scrollY >= 50) {
        this.active = true
      } else {
        this.active = false
      }
    }
  }
}
</script>

<style lang="scss">

.header {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 2rem 0;

    li {
      display: flex;
      color: #4a4a4a;
      padding: 0 2rem;
      cursor: pointer;

      &:hover {
        color: white;
      }
    }
  }
}

.header.active {
  background: #0e0e0e;
}

</style>
