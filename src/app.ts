import express, { Request, Response } from "express";
import Router from "./routes";
import path from "path"; // Import modul path

const app = express();
const { PORT = 8000 } = process.env;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Tambahkan ejs dan atur jalur tampilan
app.set("views", path.join(__dirname, "public", "views"));
app.set("view engine", "ejs");

app.use(Router);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
