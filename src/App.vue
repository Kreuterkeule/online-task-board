<template>
  <div id="app">
    <HomeVue />
  </div>
</template>

<script>

import HomeVue from './views/HomeVue.vue';

export default {
  components: {
    HomeVue,
  },
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

* {
  font-family: 'Lato', sans-serif;
}
</style>
