<template>
  <MainFrame />
</template>

<script>
import MainFrame from './pages/MainFrame.vue'

export default {
  name: 'App',
  components: {
    MainFrame
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/globalStyles.scss';

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f0f0f0;
  background: #171717;
}
</style>
