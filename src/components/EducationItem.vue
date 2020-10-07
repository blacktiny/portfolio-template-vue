<template>
  <div class="education-item">
    <p class="text-header">
      <span class="text-name">{{ data.name }}</span>&nbsp;&nbsp;
      <span class="text-period">{{ data.start }} - {{ data.end }}</span>
    </p>
    <p class="text-degree">{{ data.degree }}</p>
    <p class="text-desc">{{ data.desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'EducationItem',
  props: ['data']
}
</script>

<style lang="scss" scoped>
.education-item {
  width: calc(50% - 2rem);
  border-radius: 7px;
  background: #333;
  padding: 1.5rem;
  box-sizing: border-box;
  margin: 0 1rem 2rem;

  @media (max-width: 1023px) {
    width: calc(100% - 2rem);
  }
}

.text-name {
  font-size: 1.3em;
  font-weight: bold;
  color: #bac964;
  text-transform: uppercase;
}

.text-period {
  font-size: 1.1em;
}

.text-degree {
  font-size: 1.1em;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1em;
}

.text-desc {
  font-size: 1em;
  color: rgba(255, 255, 255, 0.4);
}
</style>
