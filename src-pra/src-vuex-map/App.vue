<template>
  <div>
    <p>
      click {{ count }} times, count is
      {{ oddOrEven }}
    </p>
    <button @click="INCREMENT(1)">+</button>
    <button @click="DECREMENT(2)">-</button>
    <button @click="incrementOdd(3)">increment if odd</button>
    <button @click="incrementAsync(4)">increment async</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["oddOrEven"]),
  },
  methods: {
    // increment() {
    //   this.$store.commit("INCREMENT", 2);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", 1);
    // },
    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", 3);
    // },
    // incrementAsync() {
    //   this.$store.dispatch("incrementAsync", 3);
    // },
    ...mapActions(["incrementOdd", "incrementAsync"]),
    ...mapMutations(["INCREMENT", "DECREMENT"]),
  },
};
</script>

<style>
</style>