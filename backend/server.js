import express from "express";
import { dataBase } from "./config/db.js";
import { route } from "./routes/user.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

// Static Folder
app.use("/images", express.static("public/images"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// User Routes
app.use("/api/user", route);

// Database + Server
dataBase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });