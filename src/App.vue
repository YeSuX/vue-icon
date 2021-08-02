<template>
  <div id="app">
    <div v-for="item in svgIcons" :key="item" class="icon-item">
      <svg-icon :icon-class="item" class-name="svg-ysx"/>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
import svgIcons from "./svg-icon";

export default {
  name: "App",
  data() {
    return {
      svgIcons,
    };
  },
};
</script>
