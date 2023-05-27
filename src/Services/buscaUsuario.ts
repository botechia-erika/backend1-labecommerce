
import { dataPersons } from "../data/dataPersons";
//busca usuario em lista geral

const queryUserName = process.argv[2]
if (!queryUserName) {
  console.log('parametro não registrado')
} else {
  const result1 = dataPersons.find(usuario => usuario.name.toUpperCase().includes(queryUserName.toUpperCase()))
  if (result1 === undefined) {
    console.log('Usuario nao encontrado')
  } else {
    console.log(result1)
  }
}
