<template>
  <div>
    <p>click {{ $store.state.count }} times, count is xxx</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  name: "App",
  // mounted() {
  //   console.log(this);
  // },
  methods: {
    increment() {
      this.$store.dispatch("increment", 3);
    },
    decrement() {
      this.$store.dispatch("decrement", 3);
    },
    incrementOdd() {
      this.$store.dispatch("incrementOdd", 3);
    },
    incrementAsync() {
      this.$store.dispatch("incrementAsync", 3);
    },
  },
};
</script>

<style>
</style>