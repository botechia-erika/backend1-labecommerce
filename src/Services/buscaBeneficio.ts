import { dataTec } from "./../../data/dataTec";

const queryProduct = process.argv[2]

if (!queryProduct) {
  console.log('parametro não registrado')
} else {
  const result = dataTec.find(product => product.name.toUpperCase().includes(queryProduct.toUpperCase()))
  if (result === undefined) {
    console.log('premio não cadastrado')
  } else {
    console.log(queryProduct)
  }
}