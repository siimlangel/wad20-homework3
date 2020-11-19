const express = require("express");
const app = express();
const cors = require("cors");

// Allow frontend to communicate
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.get("/api/posts", (req, res) => {
  // Dummy posts for testing
  post1 = {
    id: 1,
    author: {
      firstname: "John",
      lastname: "Doe",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    createTime: "Sep 18, 2020 16:17",
    text: "Which weighs more, a pound of feathers or a pound of bricks?",
    media: null,
    likes: "25k",
  };
  post2 = { id: 2, title: "Post2", content: "asdbsab" };
  res.json([post1, post2]);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
