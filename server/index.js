const express = require("express");
const app = express();
const cors = require("cors");

// Allow frontend to communicate
app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.get("/api/user", (request, response) => {
  user = {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  };
  response.json(user);
});

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
  post2 = {
    id: 2,
    author: {
      firstname: "Gordon",
      lastname: "Freeman",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    createTime: "Sep 18, 2020 16:17",
    text: null,
    media: {
      type: "video",
      url:
        "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1728-large.mp4",
    },
    likes: "15k",
  };
  post3 = {
    id: 3,
    author: {
      firstname: "Richard",
      lastname: "Stallman",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    createTime: "Sep 18, 2020 16:17",
    text: "To be or not to be...",
    media: {
      type: "image",
      url:
        "https://i.pcmag.com/imagery/reviews/00EfzjLJNL6FNKVxviGg7Zw-2.1569473216.fit_scale.size_1182x667.jpg",
    },
    likes: "15k",
  };
  res.json([post1, post2, post3]);
});

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
