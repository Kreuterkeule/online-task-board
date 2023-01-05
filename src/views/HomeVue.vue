<template lang="html">
  <div>
    <div class="menu">
      <MenuComponent />
    </div>
    <div class="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuComponent from '../components/MenuComponent.vue';

export default {
  components: {
    MenuComponent,
  },
};
</script>

<style lang="scss" scoped>
.menu {
  background: rgb(104,18,227);
  background: radial-gradient(
    circle,
    rgba(104,18,227,1) 0%,
    rgba(52,20,253,1) 35%,
    rgba(183,33,250,1) 100%
  );
  margin: 12px;
  border-radius: 100px;
  width: 97vw;
  height: 100px;
  display: flex;
  align-items: center;
}
.body {
  background-image: url('../images/22378666_6574801.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  margin: 12px;
  margin-top: 50px;
  border-radius: 50px;
  width: 97vw;
  min-height: 600px;
  height: auto;
}
router-view {
  height: 100%;
  width: 100%;
}
</style>
