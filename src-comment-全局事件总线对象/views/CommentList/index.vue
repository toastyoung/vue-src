<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
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