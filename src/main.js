import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App), //将页面渲染到App组件
}).$mount("#app"); //获取元素 等同于 el:"#app"
