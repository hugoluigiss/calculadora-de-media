let btn_add = document.getElementById('add');
let btn_calcula = document.getElementById('button');
let form1 = document.getElementById('form1');
let boxAdicionados = document.getElementById('boxAdicionados');
let resultadoTexto = document.getElementById('resultado');
let contador = 1;

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

    const entradas = [...document.querySelectorAll('input[name="entradas"]')].map(x => parseFloat(x.value ));
    let totalEntradas = 0;
    for (let i = 0; i < entradas.length; i++) {
        totalEntradas += entradas[i];
    }
    const precos = [...document.querySelectorAll('input[name="precos"]')].map(x => parseFloat(x.value ));
    let totalPrecos = 0;
    for (let i = 0; i < precos.length; i++) {
        totalPrecos += precos[i];
    }
    const quantidades = [...document.querySelectorAll('input[name="quantidades"]')].map(x => parseFloat(x.value ));
    let totalQuantidades = 0;
    for (let i = 0; i < quantidades.length; i++) {
        totalQuantidades += quantidades[i];
    }
    let mediaFinal = 0;
    mediaFinal = totalEntradas / totalQuantidades;
    let resultadoNaTela = document.querySelector('#resultadoh1');
    resultadoNaTela.textContent = "O preço médio das suas entradas é " + mediaFinal;
}

btn_calcula.addEventListener('click', function (evento) {
    evento.preventDefault();
    verifica();
});







