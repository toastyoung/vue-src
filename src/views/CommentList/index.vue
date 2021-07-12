<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-show="!comments.length">暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <List :comments="comments" :deleteComment="deleteComment" />
    </ul>
  </div>
</template>

<script>
import List from "./List";
export default {
  name: "CommentList",
  components: {
    List,
  },
  props: {
    comments: Array,
    deleteComment: Function,
  },
};
</script>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>