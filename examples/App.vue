<template>
  <div id="app">
    <div id="nav">
      <awake-button type="success">按钮</awake-button>
      <awake-switch v-model="value"></awake-switch>
      <awake-pagination   :page-count="20">

      </awake-pagination>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
