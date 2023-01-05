<template lang="html">
    <nav>
      <ul>
        <router-link :to="{ name: '/', params: {} }">
          <span class="gg-screen"></span>
        </router-link>
        <router-link :to="{ name: '/Todo', params: {} }">
          <span class="gg-file-document"></span>
        </router-link>
        <router-link :to="{ name: '/Dashboard', params: {} }">
          <span class="gg-add-r"></span>
        </router-link>
        <router-link id="last-menu-link" :to="{ name: '/Dashboard', params: {} }">
          <span class="gg-profile"></span>
        </router-link>
      </ul>
    </nav>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
nav {
  background-color: rgba(0,0,0,0);
  min-height: 10px;
  margin: 40px;
  height: 80px;
  min-width: 200px;
  width: auto;
}
ul {
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 0;
  #last-menu-link {
    position: absolute;
    right: 0;
  }
}
a {
  display: flex;
  flex-direction: row;
  min-width: 100px;
  :hover {
    background-color: rgba(255,255,255,0.2);
  }
}
.gg-screen {
box-sizing: border-box;
position: relative;
display: block;
transform: scale(var(--ggs,3.3));
width: 22px;
height: 14px;
border: 2px solid;
border-radius: 3px;
margin-top: -4px;
color: white;
margin-bottom: 6px;
}

.gg-screen::after,
.gg-screen::before {
content: "";
display: block;
box-sizing: border-box;
position: absolute;
border-radius: 3px;
width: 10px;
height: 2px;
background: white;
top: 14px;
left: 4px
}

.gg-screen::before {
width: 2px;
height: 6px;
top: 10px;
left: 8px
}
.gg-file-document {
box-sizing: border-box;
position: relative;
display: block;
transform: scale(var(--ggs,3));
width: 18px;
height: 16px;
border: 2px solid transparent;
border-right: 0;
border-top: 0;
box-shadow: 0 0 0 2px;
border-radius: 1px;
border-top-right-radius: 4px;
overflow: hidden;
color: white;
margin-left: 2px;
}

.gg-file-document::after,
.gg-file-document::before {
content: "";
display: block;
box-sizing: border-box;
position: absolute
}

.gg-file-document::before {
background: white;
box-shadow:
0 4px 0,
-6px -4px 0;
left: 0;
width: 12px;
height: 2px;
top: 8px
}

.gg-file-document::after {
width: 6px;
height: 6px;
border-left: 2px solid;
border-bottom: 2px solid;
right: -1px;
top: -1px
}
.gg-add-r {
color: white;
box-sizing: border-box;
position: relative;
display: block;
width: 22px;
height: 22px;
border: 2px solid;
transform: scale(var(--ggs,2.8));
border-radius: 4px
}

.gg-add-r::after,
.gg-add-r::before {
content: "";
display: block;
box-sizing: border-box;
position: absolute;
width: 10px;
height: 2px;
background: white;
border-radius: 5px;
top: 8px;
left: 4px
}

.gg-add-r::after {
width: 2px;
height: 10px;
top: 4px;
left: 8px
}
.gg-profile,
.gg-profile::after,
.gg-profile::before {
display: block;
box-sizing: border-box;
border: 2px solid;
border-radius: 100px;
color: white;
}

.gg-profile {
overflow: hidden;
transform: scale(var(--ggs,3));
width: 22px;
height: 22px;
position: relative
}

.gg-profile::after,
.gg-profile::before {
content: "";
position: absolute;
top: 2px;
left: 5px;
width: 8px;
height: 8px
}

.gg-profile::after {
border-radius: 200px;
top: 11px;
left: 0px;
width: 18px;
height: 18px
}
</style>
