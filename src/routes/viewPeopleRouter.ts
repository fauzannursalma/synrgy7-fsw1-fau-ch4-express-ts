import express from "express";
import { getViewsPeople } from "../service/viewPeopleService";

const router = express.Router();

router.get("/people", getViewsPeople);

export default router;
