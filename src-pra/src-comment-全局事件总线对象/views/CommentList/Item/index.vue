<template>
  <div>
    <h2 v-if="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <li class="list-group-item" v-for="comment in comments" :key="comment.id">
      <div class="handle">
        <a href="javascript:;" @click="del(comment.name, comment.id)">删除</a>
      </div>
      <p class="user">
        <span>{{ comment.name }}</span
        ><span>说:</span>
      </p>
      <p class="centence">{{ comment.content }}</p>
    </li>
  </div>
</template>
<script>
export default {
  name: "Item",
  data() {
    return {
      comments: [
        { id: 1, name: "xxx", content: "skjfsjhfdhjasgfajhfj" },
        { id: 2, name: "xxx", content: "skjfsjhfdhjasgfajhfj" },
      ],
    };
  },
  mounted() {
    this.$bus.$on("addComment", this.addComment);
  },
  beforeDestroy() {
    this.$bus.$off("addComment", this.addComment);
  },
  methods: {
    addComment(name, content) {
      this.comments.unshift({
        id: Date.now(),
        name,
        content,
      });
    },
    del(name, id) {
      if (confirm(`确定删除${name}吗`)) {
        this.comments = this.comments.filter((comment) => comment.id !== id);
      }
    },
  },
};
</script>

<style>
li {
  transition: 0.5s;
  overflow: hidden;
}

.handle {
  width: 40px;
  border: 1px solid #ccc;
  background: #fff;
  position: absolute;
  right: 10px;
  top: 1px;
  text-align: center;
}

.handle a {
  display: block;
  text-decoration: none;
}

.list-group-item .centence {
  padding: 0px 50px;
}

.user {
  font-size: 22px;
}
</style>