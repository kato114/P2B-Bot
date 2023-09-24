import { Router } from "express";

import * as account from "../controllers/account.controller.js";

export const accountRouter = (app) => {
  const router = Router();
  router.post("/create/:tg_id", account.create);
  router.post("/deposit/:tg_id", account.deposit);
  router.post("/withdraw/:tg_id", account.withdraw);
  router.post("/trade/:tg_id", account.trade);
  router.get("/onboarding/:tg_id", account.onboarding);

  app.use("/api/account", router);
};
