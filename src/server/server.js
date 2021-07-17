const express = require("express");
require("./db");
const usersRouter = require("./router/users");

const app = express();

// form表单
// app.use(express.urlencoded());
// 解析json格式
app.use(express.json());

app.use(usersRouter);

app.listen(5000, "localhost", (err) => {
  if (err) {
    // 服务器有问题
    console.log("服务器启动失败", err);
    return;
  }

  console.log("服务器启动成功了");
});
