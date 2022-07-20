const botaoMenu = document.querySelector('.botaoMenu');
const botaoFechar = document.querySelector('.botaoFechar');
const sideBar =document.querySelector('aside');


console.log(sideBar)
console.log(botaoFechar)
console.log(botaoMenu)

botaoMenu.addEventListener('click', () => {
    if(sideBar.classList.contains('mostrarMenu')){
        sideBar.classList.remove('mostrarMenu');
    }else

    sideBar.classList.add('mostrarMenu');
});

botaoFechar.addEventListener('click', () => {
    if(sideBar.classList.contains('mostrarMenu')){
        sideBar.classList.remove('mostrarMenu');
    }else
    
    sideBar.classList.add('mostrarMenu');
});