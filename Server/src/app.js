import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import userRouter from "./routes/user.router.js";
import taskRouter from "./routes/task.router.js";



dotenv.config(); //Para leer las varibles de entorno

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter)
app.use(taskRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
