<template>
  <div>
    <p>
      click {{ $store.state.count }} times, count is
      {{ $store.getters.oddOrEven }}
    </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    increment() {
      this.$store.commit("INCREMENT", 2);
    },
    decrement() {
      this.$store.commit("DECREMENT", 1);
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