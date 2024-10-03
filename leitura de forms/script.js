const bntSoma = document.getElementById('somar');

bntSoma.addEventListener('click', () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let soma = parseInt(num1) + parseInt(num2);

    console.log(soma);
});