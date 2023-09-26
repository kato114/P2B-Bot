import { Router } from "express";

import * as trade from "../controllers/trade.controller.js";

export const tradeRouter = (app) => {
  const router = Router();
  router.get("/order/:tg_id", trade.getOrder);
  router.post("/order/:tg_id", trade.openOrder);

  app.use("/api/trade", router);
};
