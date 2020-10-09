<template>
  <div class="row skill-item">
    <p class="text-name">{{ data.name }}</p>
    <div class="row skill-level">
      <div class="row level" :class="[ level ]">
        <div class="level-item" />
        <div class="level-item" />
        <div class="level-item" />
        <div class="level-item" />
      </div>
      <div class="column text" :class="[ level ]">
        <p class="text-level">{{ level }}</p>
        <p class="text-years">( {{ data.years }} years )</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillItem',
  props: ['data'],
  data: () => ({
    level: 'Beginner'
  }),
  mounted () {
    const listLevels = ['Beginner', 'Intermediate', 'Professional', 'Expert']
    this.level = listLevels[this.data.level - 1]
  }
}
</script>

<style lang="scss">

.skill-item {
  align-items: center;
  width: calc(50% - 2rem);
  margin: 0 1rem 1rem;

  @media (max-width: 1024px) {
    width: calc(100% - 2rem);
    padding: 0 1rem 1rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}

.text-name {
  width: 20%;
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.8);
  margin-right: 5%;
}

.text-level {
  font-size: 1em;
}

.text-years {
  font-size: 0.8em;
}

.skill-level {
  width: 75%;
  align-items: center;

  .level {
    width: 70%;

    &-item {
      width: calc(25% - 0.5rem);
      height: 15px;
      border-radius: 2px;
      margin: 0 0.25rem;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  .Expert {
    color: #7fff00;

    & > div {
      background: #7fff00a0;
    }
  }

  .Professional {
    color: #d2691e;

    & > div {
      background: #d2691ea0;
    }

    & > div:nth-child(4) {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  .Intermediate {
    color: #6a5acd;

    & > div:nth-child(1),
    & > div:nth-child(2) {
      background: #6a5acda0;
    }
  }

  .Beginner {
    color: #4682b4;

    & > div:nth-child(1) {
      background: #4682b4c0;
    }
  }

  .text {
    display: flex;
    align-items: center;
    width: 30%;
  }
}

</style>
