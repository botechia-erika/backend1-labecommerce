//objeto com const


//innertext - accede texto
const idContenedor = document.getElementById('contenedor')
const listadoTermos = [{
        idTermo: 0,
        name: "Stanley",
        img: "https://pricespy-75b8.kxcdn.com/product/standard/280/568327.jpg",
        price: 297.85
    },
    {
        idTermo: 1,
        name: "Montagne",
        img: "https://d368r8jqz0fwvm.cloudfront.net/37018-product_lg/termo-con-manija-18-litros.jpg",
        price: 200
    },
    {
        idTermo: 2,
        name: "Decorado",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3swmQWAyKaMm8VSXGUKiMQNfbjiLupzMvQ&usqp=CAU",
        price: 200
    },
        {
        idTermo: 3,
        name: "Decorado",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo3swmQWAyKaMm8VSXGUKiMQNfbjiLupzMvQ&usqp=CAU",
        price: 200
    }
]

/*for(let termo of listadoTermos){

}*/
const mostrarTermos = (termosCatalogo) => {
    idContenedor.innerHTML = ""
    termosCatalogo.forEach(termo => {

        idContenedor.innerHTML += `
           <li class=article">
           <h2>
               ${termo.name}
            </h2>
      <img src="${termo.img}" alt="img termo referencia ${termo.name} id ${termo.idTermo} class="cardImg" />
            <p class="tag-price">${termo.price}</p>

            <button id="btn${termo.id}">Detalhes</button>
        </li>
    `
    })
}


mostrarTermos(listadoTermos)
    /*
    for (let i = 0; i <= 5; i++) {
        idContenedor.innerHTML += `

            <div class="card">
                <h2>
                    Card
                </h2>
                <p> Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfmDOHrgl4j-NWNukuK8tb-Z3RKOcg0Fe54lp6JHqnrYUmW3Irl8gCGsDRDCRfxGbS9o&usqp=CAU" />
            </div>
    `

    }*/

/*const idHello = document.getElementById('helloWord')
    // variable ya tiene document*/
const termoHTML = document.getElementById('inputSearch')


termoHTML.addEventListener('change', () =>
    mostrarTermos(listadoTermos.filter((termo) =>
        termo.name.includes(inputSearch.value)
    ))
)


