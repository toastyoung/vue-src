<template>
  <div>
    <h2>AAA...</h2>
    <button @click="$globalEventBus.$emit('add')">按钮</button>
  </div>
</template>

<script>
export default {
  name: "A",
};
</script>

<style>
</style>