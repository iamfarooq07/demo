import express from "express";
import { dataBase } from "./config/db.js";
import { route } from "./routes/user.route.js";

const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/" , (req, res) => {
    res.send("Hello World")
});

app.use(route)

dataBase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Connected On Port ${PORT}`);
    })
}).catch((error) => {
    console.log(error);
    
})