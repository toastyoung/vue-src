<template>
  <div>
    <!-- 
      给普通DOM元素绑定的事件，就是原生DOM事件
      给组件绑定的事件，默认是自定义事件
        希望给组件绑定原生DOM事件，怎么办？
          @事件名.native="事件回调函数"
          给组件的第一个元素（根元素）绑定这个事件
      
      绑定自定义事件：
        1. 绑定事件
          <Child @update="update"/>

          <Child ref="child" />
          mounted() {
            this.$refs.child.$on("update", this.update);
          },
          beforeDestroy() {
            this.$refs.child.$off("update", this.update);
          },
        2. 触发事件
          this.$emit('update')

        3. 自定义事件API
          $on(事件名, 事件回调)      绑定持久事件
          $once(事件名, 事件回调)    绑定一次性事件
          $emit(事件名, ...事件参数) 触发事件
          $off(事件名, 事件回调)     解绑事件

        4. 作用：用来子向父通信

      ref 获取真实DOM元素或组件实例对象    
    -->
    <h1>App...</h1>
    <p>{{ count }}</p>
    <!-- 
      给组件绑定自定义事件 @事件名="回调函数"
      给组件绑定原生DOM事件 @原生事件名.native="回调函数"
     -->
    <!-- <Child @update="update" @click.native="update" /> -->
    <!-- 
      ref: 获取真实的DOM元素或组件实例对象
     -->
    <Child ref="child" />
  </div>
</template>

<script>
import Child from "./Child.vue";
export default {
  name: "App",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    update(...arg) {
      console.log(arg);
      this.count++;
    },
  },
  components: {
    Child,
  },
  mounted() {
    this.$refs.child.$on("update", this.update); //给child组件绑定自定义事件
    // this.$refs.child.$once("update", this.update);//给child组件绑定一次性事件
  },
  beforeDestroy() {
    this.$refs.child.$off("update", this.update); //卸载自定义事件
  },
};
</script>

<style>
</style>