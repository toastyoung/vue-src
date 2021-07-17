const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/vue-exec", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("数据库链接成功~");
  })
  .catch((err) => {
    console.log("数据库链接失败", err);
  });
