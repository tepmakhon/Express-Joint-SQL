import { Router } from "express";

import {
  innerJoin,
  leftJoin,
  rightJoin,
  fullJoin
} from "../controllers/joinController";

const router = Router();

router.get("/inner-join", innerJoin);
router.get("/left-join", leftJoin);
router.get("/right-join", rightJoin);
router.get("/full-join", fullJoin);

export default router;