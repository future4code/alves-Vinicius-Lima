import express, {Request, Response} from 'express'
import cors from 'cors'
import {Itens,produtos} from '../exercicio-2/data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003" )
})

app.delete("/deletar/:nome", (res:Response,req:Request)=>{
    try {
        const idProduto = req.params.name
        const deletarProduto : Itens[] = produtos.filter((produto)=>{
            return produto.name === idProduto
        })
        res.send(deletarProduto)
    } catch (error:any) {
        res.send({ message: error.message })
    }
})

console.log("Exercicio 6 finalizado!")