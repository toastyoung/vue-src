<template>
  <div>
    <h2>BBB...</h2>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  name: "B",
  mounted() {
    this.$globalEventBus.$on("add", this.add);
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    add() {
      this.count++;
    },
  },
};
</script>

<style>
</style>