import express from "express";
import peopleRouter from "./peopleRouter";
import viewsRouter from "./viewPeopleRouter";

const router = express.Router();

router.use("/people", peopleRouter);
router.use("/views", viewsRouter);

export default router;
