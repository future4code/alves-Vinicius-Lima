import express, {Request, Response} from 'express'
import cors from 'cors'
import {Itens,produtos} from '../exercicio-2/data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003" )
})

app.get("/produtos", (req: Request, res: Response)=>{
    try {
        res.send(produtos)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})

console.log("Exercicio 4 finalizado!")