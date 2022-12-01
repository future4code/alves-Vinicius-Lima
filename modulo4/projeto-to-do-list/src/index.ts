import app from "./app";
import {Request,Response} from "express";
import connection from "./connection";

app.post("/Users" ,async (req:Request, res: Response) => {

    try {
            await connection("Projeto_user")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
      res.status(200).send("Usuário inserido com sucesso!")
    } catch (error) {
        res.status(400).send("Erro detectado!")
    }
    
});

app.get("/Users/:id",async (req:Request, res: Response) => {
    try {
            const result= await connection("Projeto_user")
            .select("id", "nickname")

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send("Usuário não encontrado!")
    }
});

app.put("/Users/edit/:id",async (req:Request, res: Response) => {
    try {
        await connection("Projeto_user")
        .update({
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        })
        .where({
            id: req.params.id
        })
        res.send("Usuário atualizado!")
    } catch (error) {
        
        res.status(400).send("Não foi possível editar!")
    }
});

app.post("/task" , async (req:Request, res:Response) => {
    try {
        await connection("TodoListTask")
        .insert({
            id: Date.now().toString(),
            title: req.body.title,
            description: req.body.description,
            status:req.body.status,
            limit_date:req.body.limit_date,
            creator_user_id: req.body.creator_user_id
        })
        res.send("Tarefa criada com sucesso!")
    } catch (error) {
        res.status(400).send("Tarefa não criada!")
    }
});

app.get("/task/:id",async (req: Request, res:Response) => {
    try {
        const result= await connection("TodoListTask")
        
        res.status(200).send(result)
        
    } catch (error) {
        res.status(400).send("Tarefa não encontrada!")
    }
})