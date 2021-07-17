<template>
  <div class="container">
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input
          type="text"
          placeholder="enter the name you search"
          v-model="searchName"
        />
        <button @click="searchN">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      searchName: "",
    };
  },
  methods: {
    async searchN() {
      const searchName = this.searchName.trim();
      if (!searchName) {
        alert("请输入内容");
        return;
      }
      this.$bus.$emit("setLoading", true);

      const res = await axios({
        method: "GET",
        url: "https://api.github.com/search/users",
        params: {
          q: searchName,
        },
      });
      const users = res.data.items.map((user) => {
        return {
          id: user.id,
          html_url: user.html_url,
          login: user.login,
          avatar_url: user.avatar_url,
        };
      });

      this.$bus.$emit("setLoading", false);
      this.$bus.$emit("setUsers", users);
    },
  },
};
</script>

<style>
</style>