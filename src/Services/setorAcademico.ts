
import { dataPersons } from "./../data/dataPersons";
import FS from 'fs'

type Estudante = {
    id: string;
    role: "Student",
    name: "string",
    projetosAluno: Projeto[] | undefined,

}


type Projeto = {
    name: string,
    id: number,
    urlRepo: string,
    currentPR: string,
    status: Status,
    score: string | undefined,
    feedback: NotasFeedback[] | 0
}

type NotasFeedback = {
    avaliador: Professor,
}

type Professor = {
    nome: string,
    id: string,
    role: "Professor",
    email: string,
    urlUser: string
}


enum Status {
    naoIniciado = 0,
    aprovado = 1,
    progressando = 2,
    revisao = 3
}


