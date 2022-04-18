<template>
  <div id="nav">
    <about></about>
    <services></services>
    <options></options>
  </div>
</template>
<script>
import About from "./views/About.vue";
import Services from "./views/Service.vue";
import Options from "./views/Options.vue";

export default {
  components: {
    Options,
    About,
    Services,
  },
  // ...
};
</script>

<style lang="css">
@import "./assets/style.css";
</style>
