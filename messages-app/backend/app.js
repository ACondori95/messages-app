const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "123456789",
      title: "First server-side post",
      content: "This is comming from the browser",
    },
    {
      id: "987654321",
      title: "Second server-side post",
      content: "This is comming from the browser!",
    },
  ];
  res
    .status(200)
    .json({ message: "Posts fetched successfully!", posts: posts });
});

module.exports = app;
