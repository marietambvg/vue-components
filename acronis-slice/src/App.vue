<template>
  <div id="app">
    <a-slice />
  </div>
</template>

<script>
import Vue from "vue";
import aSlice from "./components/a-slice.vue";

export default {
  name: "app",
  components: {
    "a-slice": aSlice
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  display: flex;
  position: relative;
}
</style>
