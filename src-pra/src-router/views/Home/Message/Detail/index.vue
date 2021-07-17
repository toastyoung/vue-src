<template>
  <ul>
    <li v-for="(value, key) in message" :key="key">{{ key }}{{ value }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      message: {},
    };
  },
  methods: {
    getMessage() {
      setTimeout(() => {
        const id = this.$route.params.id;
        this.message = {
          id,
          title: "message" + id,
          content: "message" + id,
        };
      }, 1000);
    },
  },
  watch: {
    $route: {
      handler() {
        this.getMessage();
      },
      immediate: true,
    },
  },
};
</script>

<style>
</style>