<template lang="html">
  <div class="container">
    <div class="welcome">
      <h2>Welcome User</h2>
    </div>
    <div class="content">
      <router-link :to="{ name: '/Todo', params: {} }">
        <TodoComponent :parent="'Dashboard'" />
      </router-link>
      <router-link :to="{ name: '/addTodo', params: {} }">
        <AddTodoComponent :parent="'Dashboard'" />
      </router-link>
    </div>
  </div>
</template>

<script>
import TodoComponent from './TodoComponent.vue';
import AddTodoComponent from './AddTodoComponent.vue';

export default {
  components: {
    TodoComponent,
    AddTodoComponent,
  },
};
</script>

<style lang="scss" scoped>
a {
  width: 50vw;
  height: 90%;
  display: block;
  color: black;
  text-decoration: none;
}
.welcome {
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  height: 770px;
  width: 97vw;
}
.content {
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
</style>
