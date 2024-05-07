import { Request, Response } from "express";
import People from "../data/people";

let data: typeof People = require("../data/people");

const getViewsPeople = (req: Request, res: Response): void => {
  res.render("index", {
    people: data,
  });
};

export { getViewsPeople };
