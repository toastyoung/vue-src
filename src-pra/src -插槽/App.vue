<template>
  <div>
    <B>
      <p>{{ count }}</p>
      <button @click="count++">+++++++++</button>
    </B>
    <C>
      <template #header>
        <header>BBBB header</header>
      </template>

      <section>BBBB section</section>

      <template v-slot:footer>
        <footer>BBBB footer</footer>
      </template>
    </C>
    <D>
      <template #header="slotScoped">
        <header>CCCC header {{ slotScoped.sex }}</header>
      </template>

      <template v-slot="{ age }">
        <footer>CCCC footer {{ age }}</footer>
      </template>
    </D>
 
  </div>
</template>

<script>
import D from "./D.vue";
import B from "./B.vue";

import C from "./C.vue";

export default {
  name: "App",
  components: {
    D,
    B,
    C,
  
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style>
</style>