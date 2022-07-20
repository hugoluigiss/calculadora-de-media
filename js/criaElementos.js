// 1-LABEL Qual o valor da sua entrada?</label>
function createLabelEntrada() {
    let elemento = document.createElement('label');
    elemento.setAttribute('for', 'entrada' + contador);
    elemento.textContent = 'Qual o valor da sua entrada ' + contador + ' ?';
    boxAdicionados.appendChild(elemento);
}

//1-<input id="pergunta5" type="number" name="entradas"> 
function createInputEntrada() {
    let elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'entradas');
    elemento.setAttribute('id', 'entrada' + contador);
    elemento.setAttribute('required', 'required');
    boxAdicionados.appendChild(elemento);
}

//2-Label para QUAL O PREÇO DO ATIVO NA ENTRADA 1
function createLabelPreco() {
    let elemento = document.createElement('label');
    elemento.setAttribute('for', 'preco' + contador);
    elemento.textContent = 'Qual o preço do ativo na entrada ' + contador + ' ?';
    boxAdicionados.appendChild(elemento);
}

//2- INPUT QUAL O PREÇO DO ATIVO NA ENTRADA 1
function createInputPreco() {
    let elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'precos');
    elemento.setAttribute('id', 'preco' + contador);
    elemento.setAttribute('required', 'required');
    boxAdicionados.appendChild(elemento);
}

//3-Label para QUAL O PREÇO DO ATIVO NA ENTRADA 1
function createLabelQuantidade() {
    let elemento = document.createElement('label');
    elemento.setAttribute('for', 'preco' + contador);
    elemento.textContent = 'Qual a quantidade da sua entrada ' + contador + ' ?';
    boxAdicionados.appendChild(elemento);
}

//3- INPUT QUAL O PREÇO DO ATIVO NA ENTRADA 1
function createInputQuantidade() {
    let elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'quantidades');
    elemento.setAttribute('id', 'quantidade' + contador);
    elemento.setAttribute('required', 'required');
    boxAdicionados.appendChild(elemento);
}

//3-Label para QUAL O PREÇO DO ATIVO NA ENTRADA 1
function createDivisao() {
    let elemento = document.createElement('div');
    elemento.setAttribute('class', 'linha');
    
    boxAdicionados.appendChild(elemento);
}