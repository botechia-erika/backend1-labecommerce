const STAFF = "KEY-A"
const AUTHOR = "KEY-B"
const CLUB = "KEY-C"
enum Role {
    "Admin",
    "Normal",
    "User",
    "Staff",
    "Student",
    "Teacher"
}




export type Person = {
    id: string,
    name: string,
    urlClient: string,
    email: string,
    username: string,
    password: string,
    cpf: string,
    birthDate: string,
    street: string,
    streetNumber: string,
    city: string,
    state: string,
    cep: string,
    Role: "Admin" |
    "Normal" |
    "Professor" |
    "Staff" | "Student" | "Teacher"
    avatar: string
}


export type TProduct = {
    idProduct: string,
    name: string,
    description: string,
    category: string,
    price: number,
    discount: number,
    img1: string,
    img2: string,
    img3: string,
    brand: string,
    principalList: string
}


export type TPurchase = {
    personId: string,
    ticketSaleId: string,
    cursoId: string,
    parceledNumber: number,
    totalPrice: number,
}



export type TVideo = {
    id: string,
    channelId: string,
    title: string,
    description: string,
    durationInSeconds: number,
    views: number
}
/*TYPES VERSAO TASKS*/
export type TCrew = {
    id: string,
    userName: string,
    email: string,
    password: string,
    role: "Admin",
    isADMIN: true
}

type M1 = {
    name: "Fundamentos"
}

type M2 = {
    name: "Frontend React"
}

type M3 = {
    name: "Backend"
}
type M4 = {
    name: "test"
}

export type Task = {
    idTT: string,
    title: string,
    description: string,
    created_at: string,
    status: number,
    stack: M1 | M2 | M3 | M4,
}
/*
type TTaskWIP = {
    userId: string,
    idTT: string,
    taskEdit: []{},
    taskAttachments:[]{},
    taskPriority: number,
    initialEstimated: string,
    currentEstimated: [],
    finalDate: string,
    currentTeam: [],
    projectManager:[]{},
    dailyUpdates: []{},
    taskItems: []{},
    checkList:[]{}
}*/

export type TCarro = {
    marca: string
    modelo: string
    ano: number,
    placa: string,
    avaliable: 0 | 1,
    img: string
}

type Curso = {
    curso: string
    descricao: string,
    duracao: string,
    valor: number,
    stack: Stack
}

enum Stack {
    "Fullstack",
    "Frontend",
    "Backend",
    "Fundamentos"
}

type ModuloCurso = {
    idTema: string,
    titulo: string,
    stack: M1 | M2 | M3 | M4,
}



enum Turmas {

}
/*
Dentro deste curso temos as turmas: Hipátia e Sibyla
A turma Hipátia tem 150 alunos, é do período noturno e ainda não está concluída.
    A turma Sibyla tem 200 alunos, é do período integral e ainda não está concluída.
*/
