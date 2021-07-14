<template>
  <div>
    <el-button type="primary" @click="handleClick">按钮</el-button>

    <el-button type="primary" @click="dialogVisible = true">按钮</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handleClick() {
      this.$message({
        type: "success",
        message: "成功了~",
      });
    },
  },
};
</script>

<style>
</style>