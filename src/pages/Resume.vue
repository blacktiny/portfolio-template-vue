<template>
  <div id="resume" class="resume column container">
    <div class="section-heading">
      <h2>My <strong>Resume</strong></h2>
    </div>
    <div class="column content">
      <div class="column">
        <h3>Education</h3>
        <div class="row education-list">
          <EducationItem v-for="item in data.education" :key="item.id" :data="item" />
        </div>
      </div>
      <div class="column">
        <h3>Experience</h3>
        <div class="row experience-list">
          <ExperienceItem v-for="item in data.experience" :key="item.id" :data="item" />
        </div>
      </div>
    </div>
    <div class="column">
      <h3>Skills</h3>
      <div class="row skills-list">
        <SkillItem v-for="item in data.skills" :key="item.id" :data="item" />
      </div>
    </div>
  </div>
</template>

<script>
import EducationItem from '@/components/EducationItem.vue'
import ExperienceItem from '@/components/ExperienceItem.vue'
import SkillItem from '@/components/SkillItem.vue'
import jsonData from '@/helper/data.js'

export default {
  name: 'Resume',
  components: {
    EducationItem,
    ExperienceItem,
    SkillItem
  },
  data: () => ({
    data: jsonData
  })
}
</script>

<style lang="scss" scoped>

h3 {
  font-size: 1.5em;
  font-weight: 200;
  color: #fff;
  padding-left: 1rem;
}

.content {
  margin: 1rem 0;
}

.left-section {
  width: 50%;
  margin-right: 10%;
}

.education-list,
.experience-list,
.skills-list {
  flex-wrap: wrap;
  margin-bottom: 2rem;
}
</style>
