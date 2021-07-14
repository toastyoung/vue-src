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
      <CommentList :comments="comments" :delComment="delComment" />
    </div>
  </div>
</template>

<script>
import AddComment from "./AddComment";
import CommentList from "./CommentList";
export default {
  name: "App",
  components: {
    AddComment,
    CommentList,
  },
  data() {
    return {
      comments: [
        { id: 1, name: "xxx", content: "skjfsjhfdhjasgfajhfj" },
        { id: 2, name: "xxx", content: "skjfsjhfdhjasgfajhfj" },
      ],
    };
  },
  methods: {
    addComment(name, content) {
      this.comments.unshift({
        id: Date.now(),
        name,
        content,
      });
    },
    delComment(id) {
      this.comments = this.comments.filter((comment) => comment.id !== id);
    },
  },
};
</script>

<style>
</style>