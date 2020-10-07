<template>
  <div class="column container portfolio">
    <div class="section-heading">
      <h2>Featured <strong>Portfolio</strong></h2>
    </div>
    <ul class="categories">
      <li class="column" v-for="item in allCategories" :key="item.id" :class="{ active: item.id === curFilter }" v-on:click="updateFilter(item.id)">{{ item.title }}</li>
    </ul>
    <div class="content">
      <PortfolioItem v-for="item in portfolios" :key="item.id" :data="item" @open-modal="openPortfolioModal" />
    </div>
  </div>
  <PortfolioModal v-if="isOpenModal" :data="curPortfolio" @close-modal="isOpenModal = false" />
</template>

<script>
import PortfolioItem from '@/components/PortfolioItem.vue'
import PortfolioModal from '@/components/PortfolioModal.vue'
import jsonData from '@/helper/data.js'

export default {
  name: 'Portfolio',
  components: {
    PortfolioItem,
    PortfolioModal
  },
  data: () => ({
    allCategories: jsonData.allCategories,
    portfolios: jsonData.portfolios,
    curFilter: 'all',
    curPortfolio: null,
    isOpenModal: false
  }),
  methods: {
    updateFilter (newFilter) {
      this.curFilter = newFilter
      // filter portfolios
      if (newFilter === 'all') this.portfolios = jsonData.portfolios
      else
        this.portfolios = jsonData.portfolios.filter(portfolio => portfolio.categories.includes(newFilter))
    },
    openPortfolioModal ({ id }) {
      console.log('id = ', id)
      this.isOpenModal = true
      this.curPortfolio = jsonData.portfolios.find(portfolio => portfolio.id === id)
    }
  }
}
</script>

<style lang="scss" scoped>

.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    padding: 0;
    margin: 1rem 2.5rem;
    list-style-type: none;
    cursor: pointer;
    transition: color .2s linear;
  }

  li:hover,
  li.active {
    color: #00bd7a;

    &::after {
      position: absolute;
      top: 120%;
      content: '';
      width: 100%;
      height: 1px;
      background: #00bd7a;
    }
  }
}

.content {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
}

</style>
