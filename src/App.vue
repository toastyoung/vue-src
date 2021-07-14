<template>
  <div class="container">
    <h1>Vue Router</h1>
    <div class="row">
      <div class="col-md-4">
        <ul class="nav nav-pills nav-stacked">
          <!-- 
            路由链接跳转：router-link
            作用：只负责切换地址
           -->
          <li>
            <!-- <router-link
              to="/about"
              active-class="active"
              exact-active-class="exact-active"
              >About</router-link
            > -->
            <router-link to="/about">About</router-link>
          </li>
          <li><router-link to="/home">Home</router-link></li>
        </ul>
      </div>
      <div class="col-md-8">
        <!-- 
          router-view:
          作用：根据路由路径的变化，自动加载显示路由组件
         -->
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.router-link-active {
  color: #fff !important;
  background-color: yellowgreen !important;
}
</style>