<template>
  <div class="header" :class="{ active: active }">
    <ul>
      <li v-for="item in listOfHeaders" :key="item.id">
        <a :href="item.link" :class="{ active: visibleId === item.id }">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    active: false,
    visibleId: 'home',
    listOfHeaders: [
      {
        id: 'home',
        name: 'Home',
        link: '#home'
      },
      {
        id: 'about',
        name: 'About',
        link: '#about'
      },
      {
        id: 'portfolio',
        name: 'Portfolio',
        link: '#portfolio'
      },
      {
        id: 'resume',
        name: 'Resume',
        link: '#resume'
      },
      {
        id: 'contact',
        name: 'Contact',
        link: '#contact'
      },
    ]
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

      this.checkVisibleIdViewport()
    },
    isInViewport (el) {
      const rect = el.getBoundingClientRect()

      return (
        rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) / 2
      )
    },
    checkVisibleIdViewport () {
      for (const header of this.listOfHeaders) {
        let section = document.querySelector(header.link)
        if (this.isInViewport(section)) {
          this.visibleId = header.id
          break
        }
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
  transition: background .3s linear;

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
      transition: color .3s linear;

      a {
        text-decoration: none;
        color: #4a4a4a;

        &:hover,
        &.active {
          color: #00bd7a;
        }
      }
    }
  }
}

.header.active {
  background: #0e0e0e;
}

</style>
