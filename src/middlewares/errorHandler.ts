import { Request, Response, NextFunction } from "express";

const idChecker = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const newId = +id;

  if (newId > 0) {
    // Jika ID valid, lanjutkan ke middleware atau handler selanjutnya
    next();
  } else {
    // Jika ID tidak valid, kirim respons dengan status 400 Bad Request
    res.status(400).json({ message: "Id tidak valid" });
  }
};

export { idChecker };
