const express = require("express");
const Users = require("../db/models/users");
const router = new express.Router();

/*
  http
    响应状态码
    http协议具体内容
    三次握手、四次挥手
    缓存机制（强制缓存、协商缓存）
    请求方式  
      GET      查询
      POST     新增
      PUT      修改（全部）
      PATCH    修改（部分）
      DELETE   删除
      OPTIONS  预检请求
    跨域
*/

// 分页查询用户
// 需要两个参数 page 当前页码 limit 每页条数
router.get("/users/:page/:limit", async (req, res) => {
  try {
    const page = +req.params.page;
    const limit = +req.params.limit;

    const users = await Users.find({}, { password: 0 }) // 查询所有数据
      .skip((page - 1) * limit) // 跳过xx条
      .limit(limit); // 只要xx条

    // 计算总数
    const total = await Users.count();

    // _id
    res.json({
      code: 20000,
      data: {
        users: users.map((user) => {
          return {
            id: user._id,
            username: user.username,
            nickname: user.nickname,
          };
        }),
        total,
      },
    });
  } catch (e) {
    console.log(e);

    res.json({
      code: 20001,
      message: "服务器故障",
    });
  }
});

// 新增用户
router.post("/users", async (req, res) => {
  try {
    const { username, nickname, password } = req.body;

    const isExsitUser = await Users.findOne({ username });

    if (isExsitUser) {
      res.json({
        code: 20002,
        message: "用户名已存在",
      });
      return;
    }

    const user = await Users.create({ username, nickname, password });

    res.json({
      code: 20000,
      data: {
        id: user._id,
        username: user.username,
        nickname: user.nickname,
      },
    });
  } catch (e) {
    console.log(e);

    res.json({
      code: 20001,
      message: "服务器故障",
    });
  }
});

// 修改用户
router.put("/users/:id", async (req, res) => {
  try {
    const { username, nickname, password } = req.body;
    const { id } = req.params;

    await Users.updateOne(
      { _id: id },
      {
        $set: {
          username,
          nickname,
          password,
        },
      }
    );

    res.json({
      code: 20000,
      data: {},
    });
  } catch (e) {
    console.log(e);

    res.json({
      code: 20001,
      message: "服务器故障",
    });
  }
});

// 删除用户
router.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Users.deleteOne({ _id: id });

    res.json({
      code: 20000,
      data: {},
    });
  } catch (e) {
    console.log(e);

    res.json({
      code: 20001,
      message: "服务器故障",
    });
  }
});

module.exports = router;
