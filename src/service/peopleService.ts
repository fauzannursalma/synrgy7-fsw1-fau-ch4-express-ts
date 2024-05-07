import { Request, Response } from "express";
// import { uploader } from "../middlewares/cloundinary";
import People from "../data/people";

// 'typeof People' untuk merujuk pada tipe dari objek People
let data: typeof People = require("../data/people");

const getPeople = (req: Request, res: Response): void => {
  res.status(200).json({ message: "Success", data });
};

const getPeopleById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const numericId: number = parseInt(id);

  const foundPerson = data.find((row) => row.id === numericId);

  if (foundPerson) {
    res.status(200).json({ message: "success", data: foundPerson });
  } else {
    res.status(404).json({ message: "Person not found" });
  }
};

const createPeople = (req: Request, res: Response): void => {
  const { name, username, email } = req.body;

  const newPeople = {
    id: data.length + 1,
    name,
    username,
    email,
  };

  data.push(newPeople);
  res.status(201).json({ message: "Person Created", data });
};

const deletePeople = (req: Request, res: Response): void => {
  const { id } = req.params;

  const peopleIndex = data.findIndex((people) => people.id === +id);

  if (peopleIndex !== -1) {
    data.splice(peopleIndex, 1);
    res.status(200).json({ message: "Person Deleted", data });
  } else {
    res.status(400).json({ message: `Person with id ${id} not found` });
  }
};

const updatePeople = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { name, username, email } = req.body;

  const peopleIndex = data.findIndex((people) => people.id === +id);

  if (peopleIndex !== -1) {
    data[peopleIndex] = {
      id: Number(id),
      name,
      username,
      email,
    };
    res.status(200).json({ message: "Person Updated", data });
  } else {
    res.status(400).json({ message: `Person with id ${id} not found` });
  }
};

// const uploadImageHandler = (req: Request, res: Response): void => {
//   const url = `/uploads/${req.file.filename}`;

//   res.status(200).json({ message: "Uploaded!", url });
// };

// const cdnUploadImageHandler = (req: Request, res: Response): void => {
//   const fileBase64 = req.file.buffer.toString("base64");
//   const file = `data:${req.file.mimetype};base64,${fileBase64}`;

//   uploader.upload(file, (error: any, result: any) => {
//     if (error) {
//       res.status(500).json({ message: "Failed to upload image" });
//     } else {
//       res.status(200).json({ message: "Uploaded!", url: result.url });
//     }
//   });
// };

export { getPeople, getPeopleById, createPeople, deletePeople, updatePeople };
