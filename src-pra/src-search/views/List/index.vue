<template>
  <div>
    <h1 v-if="isLoading">loading...</h1>
    <div class="row" v-else-if="!!users.length">
      <div class="card" v-for="user in users" :key="user.id">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{ user.login }}</p>
      </div>
    </div>
    <h1 v-else>请输入搜索内容</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      isLoading: false,
      users: [],
    };
  },
  methods: {
    setLoading(loading) {
      this.isLoading = loading;
    },
    setUsers(users) {
      this.users = users;
    },
  },
  mounted() {
    this.$bus.$on("setLoading", this.setLoading);
    this.$bus.$on("setUsers", this.setUsers);
  },
  beforeDestroy() {
    this.$bus.$off("setLoading", this.setLoading);
    this.$bus.$off("setUsers", this.setUsers);
  },
};
</script>

<style>
.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
h1 {
  text-align: center;
}
</style>