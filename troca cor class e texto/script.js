const btnTrocaCor = document.getElementById('trocaCor');
let caixaTexto = document.getElementById('caixa');

btnTrocaCor.addEventListener('click', () => {
    if(caixaTexto.className === 'verde'){
        caixaTexto.classList.remove('verde');
        caixaTexto.classList.add('amarelo')
    }else{
        caixaTexto.classList.remove('amarelo');
        caixaTexto.classList.add('verde');
    }

    console.log(caixaTexto.className);
});

const btnTrocaTexto = document.getElementById('trocaTexto');

btnTrocaTexto.addEventListener('click', () => {
    if(caixaTexto.innerHTML === 'Banana'){
        document.getElementById('caixa').innerHTML = 'Limão';
    }else{
        document.getElementById('caixa').innerHTML = 'Banana';
    }
});