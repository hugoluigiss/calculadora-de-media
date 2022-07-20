let btn_add = document.getElementById('add');
let btn_calcula = document.getElementById('button');
let form1 = document.getElementById('form1');
let boxAdicionados = document.getElementById('boxAdicionados');
let resultadoTexto = document.getElementById('resultado');
let contador = 1;


//quantidade de moeda = quantidade em dolar / pelo preço do ativo;
let preco1 = 27000
let entrada1 = 21500
let quantidade1 = preco1 / entrada1

let preco2 = 1300
let entrada2 = 25200
let quantidade2 = preco2 / entrada2




//AQUI EU PREVENI A ATUALIZAÇÃO AUTOMATICA DA PAGINA E TBM CRIE A FUNÇÃO DE CRIAÇÃO DOS ELEMENTOS
form1.addEventListener('submit', function (evento) {
    contador++;
    evento.preventDefault();
    createLabelEntrada();
    createInputEntrada();
    createLabelPreco();
    createInputPreco();
    createLabelQuantidade()
    createInputQuantidade()
    createDivisao();


});



function verifica() {

    const entradas = [...document.querySelectorAll('input[name="entradas"]')].map(x => parseFloat(x.value * 1));

    let totalEntradas = 0;

    for (let i = 0; i < entradas.length; i++) {
        totalEntradas += entradas[i];
    }

    const precos = [...document.querySelectorAll('input[name="precos"]')].map(x => parseFloat(x.value * 1));
    let totalPrecos = 0;

    for (let i = 0; i < precos.length; i++) {
        totalPrecos += precos[i];
    }

    const quantidades = [...document.querySelectorAll('input[name="quantidades"]')].map(x => parseFloat(x.value * 1));
    let totalQuantidades = 0;

    for (let i = 0; i < quantidades.length; i++) {
        totalQuantidades += quantidades[i];
    }



    let mediaFinal = 0;

    mediaFinal = totalEntradas / totalQuantidades;

    console.log(quantidades)

    console.log("quantidade de moeda " + totalQuantidades)
    console.log('media ' + mediaFinal);
    console.log("total de preços " + totalPrecos);
    console.log("total de entradas " + totalEntradas);
    console.log("total de quantidades " + totalQuantidades);


    let resultadoNaTela = document.querySelector('#resultadoh1');
    resultadoNaTela.textContent = "O preço médio das suas entradas é " + mediaFinal;

}


btn_calcula.addEventListener('click', function (evento) {
    evento.preventDefault();
    verifica();


});





