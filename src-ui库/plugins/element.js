import Vue from "vue";
import { Button, Message, Dialog } from "element-ui";

// 按需引入  vue add element

Vue.use(Button);
Vue.use(Dialog);

Vue.prototype.$message = Message;