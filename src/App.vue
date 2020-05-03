<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {}
    };
  },
  mounted() {
    
  }
};
</script>

<style>
@import './assets/scss/reset.scss';
@import './assets/scss/modal.scss';
</style>
