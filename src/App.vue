<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对React的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <AddComment :addComment="addComment" />
      <CommentList :comments="comments" :deleteComment="deleteComment" />
    </div>
  </div>
</template>
<script>
import AddComment from "./views/AddComment";
import CommentList from "./views/CommentList";
export default {
  name: "App", //组件名称
  data() {
    return {
      comments: [
        { id: 1, name: "李白", content: "蜀道难，难于上青天。" },
        { id: 2, name: "李白", content: "蜀道难，难于上青天。" },
        { id: 3, name: "李白", content: "蜀道难，难于上青天。" },
      ],
    };
  },
  components: {
    AddComment,
    CommentList,
  },
  methods: {
    addComment(name, content) {
      this.comments.unshift({
        id: Date.now(),
        name,
        content,
      });
    },
    deleteComment(id) {
    
      this.comments = this.comments.filter((comment) => id != comment.id);
    },
  },
};
</script>

<style>
</style>