<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item />
    </ul>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "CommentList",
  components: {
    Item,
  },
};
</script>

<style>
.reply {
  margin-top: 0px;
}
</style>