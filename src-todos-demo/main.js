import Vue from "vue";
import App from "./App.vue";
import './style/commen.css'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
