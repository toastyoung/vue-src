import Vue from "vue";
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./plugins/element.js";
import App from "./App.vue";

// Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
