<template>
  <div>
    <li class="list-group-item" v-for="comment in comments" :key="comment.id">
      <div class="handle">
        <a href="javascript:;" @click="deleteComment(comment.id)">删除</a>
      </div>
      <p class="user">
        <span>{{ comment.name }}</span
        ><span>说:</span>
      </p>
      <p class="centence">{{ comment.msg }}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "CommentList",
  props: {
    comments: Array,
    deleteComment: Function,
  },
};
</script>

<style scoped>
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