import express from "express";
import authRoute from "./routes/auth.js";
import postsRoute from "./routes/posts.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api", postsRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
