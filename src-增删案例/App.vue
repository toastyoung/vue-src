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
  name: "App",
  data() {
    return {
      comments: [
        { id: 1, name: "李白", msg: "床前明月光，疑是地上霜。" },
        { id: 2, name: "杜甫", msg: "功盖三分国，名成八阵图。" },
      ],
    };
  },
  components: {
    AddComment,
    CommentList,
  },
  methods: {
    addComment(name, msg) {
      this.comments.unshift({
        id: Date.now(),
        name,
        msg,
      });
    },
    deleteComment(id) {
      this.comments = this.comments.filter((comment) => id !== comment.id);
    },
  },
};
</script>

<style>
</style>