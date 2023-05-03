import express, { Request, Response } from "express";
import PocketBase from "pocketbase";

const router = express.Router();
const pb = new PocketBase(process.env.PB_URL);

// Create a new post
router.post("/posts", async (req: Request, res: Response) => {
  const { title, content, username } = req.body;
  console.log(title, username);
  try {
    const newPost = await pb.collection("posts").create({
      title,
      content,
      // need to get relation id
    });

    res.status(200).json({ newPost });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Get posts by author
router.get("/posts/:author", async (req: Request, res: Response) => {
  const { author } = req.params;
  console.log(author);
  try {
    const posts = await pb.collection("posts").getFullList();
    const authorPosts = posts.filter((post: any) => post.name === author);
    res.status(200).json({ authorPosts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

export default router;
