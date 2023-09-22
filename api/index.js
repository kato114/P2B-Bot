import express, { json, urlencoded } from "express";
import cors from "cors";
import { accountRouter } from "./app/routes/account.route.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Perp Bot." });
});

accountRouter(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
