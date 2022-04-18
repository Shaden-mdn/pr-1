<template>
  <div class="services">
    <h4>These are your services</h4>
  </div>
</template>

<script>
export default {
  name: "Service",
  props: {
    service: {
      required: true,
    },
  },
};
</script>