<template>
  <div>
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
  }
}
</script>

<style>

</style>
