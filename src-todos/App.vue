<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo" />
      <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo" />
      <Footer
        :allTodosDone="allTodosDone"
        :allTodos="todos.length"
        :isDoneTodos="isDoneTodos"
        :delDoneTodos="delDoneTodos"
      />
    </div>
  </div>
</template>

<script>
import Header from "./views/Header";
import List from "./views/List";
import Footer from "./views/Footer";

export default {
  name: "App",
  components: {
    Header,
    List,
    Footer,
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
  computed: {
    allTodosDone() {
      return this.todos.reduce((pre, todo) => {
        return pre + (todo.isDone ? 1 : 0);
      }, 0);
    },
  },
  methods: {
    // 增加任务
    addTodo(name) {
      this.todos.unshift({
        id: Date.now(),
        name,
        isDone: false,
      });
    },
    // 修改任务
    updateTodo(id) {
      // find方法
      // 如果都返回false，没有找到，最终返回值是undefined
      // 如果有一个返回true，就找到了，中止遍历，最终返回值是当前遍历这项元素
      const todo = this.todos.find((todo) => todo.id === id);
      todo.isDone = !todo.isDone;
    },
    // 删除任务
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    // 全选任务
    isDoneTodos(boo) {
      this.todos.forEach((todo) => (todo.isDone = boo));
    },
    // 清除已完成任务
    delDoneTodos() {
      if (confirm(`确定要删除已完成任务吗`))
        this.todos = this.todos.filter((todo) => !todo.isDone);
    },
  },
};
</script>

<style>
/*app*/
.todo-container {
  width: 600px;
  margin: 30px auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>