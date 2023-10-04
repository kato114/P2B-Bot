import express, { json, urlencoded } from "express";
import cors from "cors";
import { rewardsRouter } from "./app/routes/rewards.route.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Dashboard Backend." });
});

rewardsRouter(app);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
