<template>
  <div id="app">
    <div v-for="item in svgIcons" :key="item" class="icon-item">
      <svg-icon :icon-class="item" class-name="svg-ysx" class="svg-ooo"/>
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

<style scoped>
.icon-item{
  display: inline-block;
  border-radius: 5px;
  cursor: pointer;
}
.svg-ooo:hover{
  background-color: aliceblue;
  fill: red;
  transition: all 0.5s;
}

.svg-ooo{
  fill: blue;
}
</style>
