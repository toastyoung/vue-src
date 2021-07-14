<template>
  <div>
    <h2>Child...</h2>
    <button @click="handleClick">update</button>
  </div>
</template>

<script>
export default {
  name: "Child",
  methods: {
    handleClick() {
      this.$emit("update", 123);
    },
  },
};
</script>

<style>
</style>