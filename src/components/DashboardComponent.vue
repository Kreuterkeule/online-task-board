<template lang="html">
  <div class="container">
    <div class="welcome">
      <h2>Welcome User</h2>
    </div>
      <router-link :to="{ name: '/Todo', params: {} }">
        <TodoComponent :parent="'Dashboard'" />
      </router-link>
  </div>
</template>

<script>
import TodoComponent from './TodoComponent.vue';

export default {
  components: {
    TodoComponent,
  },
};
</script>

<style lang="scss" scoped>
a {
  width: 40vw;
  height: 80%;
  display: block;
}
.welcome {
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  height: 600px;
  width: 97vw;
}
</style>
