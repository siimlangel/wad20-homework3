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
    post1 = { id: 1, title: "Post1", content: "asdbsbs" };
    post2 = { id: 2, title: "Post2", content: "asdbsab" };
    res.json([post1, post2]);
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
