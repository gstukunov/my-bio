<template>
  <div class="app-wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html,
body {
  font-family: Fira Code;
  margin: 0;
  background-color: black;
  --main-color: #fff;
  --important-text: orange;
  font-size: 13px;
}
.app-wrapper {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
