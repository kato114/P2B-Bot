import { Router } from "express";

import * as rewards from "../controllers/rewards.controller.js";

export const rewardsRouter = (app) => {
  const router = Router();
  router.get("/calculate", rewards.calculate);
  router.get("/request/:address", rewards.request);
  router.get("/process", rewards.process);

  app.use("/api/rewards", router);
};
