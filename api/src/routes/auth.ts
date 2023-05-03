import express, { Request, Response } from "express";
import PocketBase from "pocketbase";

const router = express.Router();
const pb = new PocketBase(process.env.PB_URL);

// Login
router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.status(200).json({ username, password });

  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(username, password);
    res.status(200).json({ authData });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// Register
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log("user", username);
  try {
    const authData = await pb.collection("users").create({
      username,
      password,
      passwordConfirm: password,
    });
    console.log(authData);
    res.status(200).json({ authData });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

export default router;
