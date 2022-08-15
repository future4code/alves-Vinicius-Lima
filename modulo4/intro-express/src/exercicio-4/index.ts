import express, {Request , Response} from "express";
import cors from "cors";
import {users} from '../exercicio-3/index'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/users", (req: Request , res: Response) => {
    const usuarios = users
    console.table(usuarios)
    res.send(usuarios)
    return usuarios
})

console.log("Exercicio 4 finalizado")