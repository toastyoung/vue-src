<template>
  <ul class="todo-main">
    <Item v-for="todo in todos" :todo="todo" :key="todo.id" />
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  components: {
    Item,
  },
  data() {
    return {
      todos: [
        { id: 1, name: "吃饭", isDone: false },
        { id: 2, name: "吃饭", isDone: true },
        { id: 3, name: "吃饭", isDone: true },
        { id: 4, name: "吃饭", isDone: false },
      ],
    };
  },
  methods: {
    addTodo(name) {
      this.todos.unshift({
        id: Date.now(),
        name,
        isDone: false,
      });
    },
    changeIsDone(todo) {
      this.todos.map((item) => {
        if (item === todo) {
          item.isDone = !item.isDone;
        }
      });
    },
    delTodo(todo) {
      this.todos = this.todos.filter((item) => item !== todo);
    },
  },
  mounted() {
    this.$bus.$on("addTodo", this.addTodo);
    this.$bus.$on("changeIsDone", this.changeIsDone);
    this.$bus.$on("delTodo", this.delTodo);
  },
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>