import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import About from "../views/About";
import Message from "../views/Home/Message";
import News from "../views/Home/News";
import Detail from "../views/Home/Message/Detail";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      children: [
        // 子路由
        { path: "/home/news", component: News },
        {
          // 路由不以/开头 会自动补全
          path: "message",
          component: Message,
          children: [{ path: "detail/:id", component: Detail }],
        },
        {
          path: "",
          redirect: "news",
        },
      ],
    },
    { path: "/about", component: About },
    { path: "*", redirect: "/Home" },
  ],
});

export default router;
