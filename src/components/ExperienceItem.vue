<template>
  <div class="education-item" :class="{ collapsed: isCollapsed }">
    <p class="text-role">{{ data.role }}</p>
    <p class="text-period">{{ data.period }}</p>
    <p class="text-company">{{ data.company }}</p>
    <div class="text-desc" ref="desc" v-html="data.work" />
    <div class="more-btn" v-if="isMoreBtnShowed" v-on:click="onSeeMoreClicked">{{ isCollapsed ? '...More' : 'Less' }}</div>
    <a v-bind:href="data.product" target="_blank">{{ data.product }}</a>
  </div>
</template>

<script>
export default {
  name: 'ExperienceItem',
  props: ['data'],
  data: () => ({
    isCollapsed: false,
    isMoreBtnShowed: false,
  }),
  mounted () {
    this.checkDescSectionHeight()
  },
  methods: {
    checkDescSectionHeight () {
      const height = this.$refs.desc.clientHeight;
      if (height > 50) {
        this.isCollapsed = true
        this.isMoreBtnShowed = true
      }
    },
    onSeeMoreClicked () {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.education-item {
  width: calc(50% - 2rem);
  height: fit-content;
  border-radius: 7px;
  background: #333;
  padding: 1.5rem;
  box-sizing: border-box;
  margin: 0 1rem 2rem;
  transition: all 0.5s ease;

  @media (max-width: 1023px) {
    width: calc(100% - 2rem);
  }
}

.text-role {
  font-size: 1.3em;
  font-weight: bold;
  color: #bac964;
  text-transform: uppercase;
}

.text-period {
  font-size: 1em;
  padding: 0.5em 0 0.25em;
}

.text-company {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1em;
}

.text-desc {
  min-height: 45px;
  font-size: 1em;
  color: rgba(255, 255, 255, 0.4);
  margin-bottom: 0.9rem;
}

.collapsed {
  .text-desc {
    overflow: hidden;
    max-height: 45px;
    margin-bottom: 0.5rem;
  }
}

.more-btn {
  width: fit-content;
  font-size: 1em;
  color: #bac96480;
  margin: -1rem 0 0 auto;
  cursor: pointer;

  &:hover {
    color: #bac964;
  }
}

a {
  font-size: 1em;
  color: #bac96480;
}
</style>
