import express,{Request, Response} from "express";
import cors from "cors";
import {post} from '../exercicio-6/index'
import { users } from "../exercicio-3/index";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/postUser", (req: Request , res: Response)=>{
    const postagemId = req.headers.post
    const usuarioId = req.headers.users
    const user = users.find((user)=>{
        if(user.id === 1){
            return usuarioId
        } else{
            return postagemId
        }
    })
    res.send(user)
    console.table(user)
    return user
})

console.log("Exercicio 8 finalizado")