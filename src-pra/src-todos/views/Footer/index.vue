<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone" />
    </label>
    <span>
      <span>已完成{{ allTodosDone }}</span> / 全部{{ allTodos }}
    </span>
    <button
      class="btn btn-danger"
      @click="delDoneTodos"
      v-show="!!allTodosDone" 
    >
    <!-- !!allTodosDone !! 双非强制转换布尔值 -->
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    allTodosDone: Number,
    allTodos: Number,
    isDoneTodos: Function,
    delDoneTodos: Function,
  },
  computed: {
    isAllDone: {
      get() {
        return this.allTodosDone === this.allTodos && this.allTodos > 0;
      },
      set(val) {
        this.isDoneTodos(val);
      },
    },
  },
};
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>