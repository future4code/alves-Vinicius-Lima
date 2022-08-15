import express,{Request, Response} from "express";
import cors from "cors";
import {post} from '../exercicio-6/index'

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/posts", (req:Request , res:Response)=>{
   const publicacoes = post
   console.table(publicacoes)
   res.send(publicacoes)
   return publicacoes
})

console.log("Exercicio 7 finalizado")