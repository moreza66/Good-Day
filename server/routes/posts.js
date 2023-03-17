import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();
// router.get("/", (req, res) => {
//   res.send("THIS WORKS");
// });

router.get("/", getPosts);
router.post("/", createPost);

export default router;
