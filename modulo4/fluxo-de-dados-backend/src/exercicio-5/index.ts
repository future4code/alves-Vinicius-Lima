import express, {Request, Response} from 'express'
import cors from 'cors'
import {Itens,produtos} from '../exercicio-2/data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003" )
})

app.put("/editarPreço/:id", (req: Request, res: Response)=>{
    try {
            const id = req.params.id as string
            const {price, name} = req.body

            if(!id){
                res.statusCode=404
                throw new Error("Você não passou o ID do produto")
            }
            if(!price && !name){
                res.statusCode= 404
                throw new Error("Preço não foi enviado para alteração")
            }
            if(price <= 0 ){
                res.statusCode= 401
                throw new Error( `O ${price} sendo negativo é invalido`);
            }

            const trocar = produtos.filter((produto)=>{
                if(produto.id === id){
                    return produto
                }
            })
            .map((produto)=>{
                return produto.price = price
            })

            res.send(trocar)
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
})



console.log("Exercicio 5 finalizado!")