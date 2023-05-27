import express from 'express';
import { Request } from 'express';
import { Response } from 'express';
import cors from 'cors';
import dataPersons from "./data/dataPersons"
import { dataTec } from "./data/dataTec"


const app = express();

app.use(express());
app.use(cors());



app.get("/", (req: Request, res: Response) => {

    res.send({ products: dataTec });
})

app.get("/Persons", (req: Request, res: Response) => {
    res.send({ Persons: dataPersons });
})


app.get("/products", (req: Request, res: Response) => {
    res.send({ Persons: dataPersons });
})

app.listen(3113, () => {
    console.log("Servidor rodando na porta 3113");
});
