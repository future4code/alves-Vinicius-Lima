import express, {Request, Response} from 'express'
import cors from 'cors'
import { produtos,Itens } from '../exercicio-2/data'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
    console.log("Server is running in http://localhost:3003" )
})

// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de
//  teste com método GET no path “/test”
//  que retorna uma mensagem genérica avisando que a API está funcional. 

app.get("/test", (req: Request, res: Response)=>{
    try {
        res.send("Essa API está funcionando!")
    } catch (error) {
        
    }
})
















console.log("Exercicio 1 finalizado!")