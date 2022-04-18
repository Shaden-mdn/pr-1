<template>
  <div class="options">
    <h4>These are your options</h4>
  </div>
</template>

<script>
export default {
  name: "Options",
  props: {
    option: {
      required: true,
    },
  },
};
</script>

<style scoped>
.options {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.options:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
