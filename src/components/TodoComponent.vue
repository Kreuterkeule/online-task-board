<template lang="html">
  <div class="TodoContainer">
  </div>
</template>

<script>
export default {
  props: {
    parent: {
      type: String,
      required: false,
      default: 'notDashboard',
    },
  },
  mounted() {
    const container = document.querySelector('.TodoContainer');
    if (this.parent === 'Dashboard') {
      container.style.width = '35vw';
      container.style.height = '100%';
      container.style.margin = '0 2.5vw';
    } else {
      container.style.width = '100%';
      container.style.height = '600px';
    }
    return 0;
  },
};
</script>

<style lang="scss" scoped>
.TodoContainer {
  background-color: red;
  display: block;
}
</style>
