<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <input type="checkbox" v-model="checked" />
      <span>{{ todo.name }}</span>
    </label>
    <button
      class="btn btn-danger"
      style="display: none"
      v-show="isShow"
      @click="del"
    >
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: {
    todo: Object,
    updateTodo: Function,
    deleteTodo: Function,
  },
  computed: {
    checked: {
      get() {
        return this.todo.isDone;
      },
      set() {
        this.updateTodo(this.todo.id);
      },
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    del() {
      const { id, name } = this.todo;
      if (confirm(`确认删除${name}吗`)) {
        this.deleteTodo(id);
      }
    },
  },
};
</script>
  
<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>