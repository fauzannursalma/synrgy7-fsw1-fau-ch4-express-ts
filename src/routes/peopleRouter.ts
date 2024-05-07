import { Router, Request, Response, NextFunction } from "express";
import {
  getPeople,
  getPeopleById,
  createPeople,
  deletePeople,
  updatePeople,
} from "../service/peopleService";
import { idChecker } from "../middlewares/errorHandler";

const router = Router();

router.get("/", getPeople);
router.get("/:id", idChecker, getPeopleById);
router.post("/", createPeople);
router.delete("/:id", idChecker, deletePeople);
router.put("/:id", idChecker, updatePeople);

export default router;
