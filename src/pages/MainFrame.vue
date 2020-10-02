<template>
  <div class="main" v-on:scroll.passive="handleScroll">
    <Header />
    <Home />
    <About />
    <Portfolio />
    <Resume />
    <Contact />
  </div>
</template>

<script>
import Header from './Header'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'

export default {
  name: 'MainFrame',
  components: {
    Header,
    Home,
    About,
    Portfolio,
    Resume,
    Contact
  },
  methods: {
    handleScroll () {
      var pageContainer = document.querySelector('.main')
      if (pageContainer.scrollTop >= 50) {
        console.log('active')
      } else {
        console.log('deactive')
      }
    }
  }
}
</script>

<style>

.main {
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
}

</style>
