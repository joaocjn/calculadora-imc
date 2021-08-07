function escopo(){
    const seletorForm = document.querySelector('.form');
    const seletorResultado = document.querySelector('.resultado');
    
    function calculoIMC(eventoButton){
        eventoButton.preventDefault();
        const peso =  Number(seletorForm.querySelector('.input-peso').value);
        const altura =  Number(seletorForm.querySelector('.input-altura').value);

        let resultadoSoma = peso / (altura * altura);
        resultadoSoma = resultadoSoma.toFixed(2);

        seletorResultado.style.display = 'flex';
        seletorResultado.style.backgroundColor = 'rgb(8, 140, 167)';

        if(resultadoSoma <= 18.5){
            seletorResultado.innerHTML = `<p>Seu IMC é: ${resultadoSoma} (Abaixo do peso)</p>`;
        }else if(resultadoSoma >= 18.6 && resultadoSoma <= 24.9){
            seletorResultado.innerHTML = `<p>Seu IMC é: ${resultadoSoma} (Peso normal)</p>`;
        }else if(resultadoSoma >= 25 && resultadoSoma <= 29.9){
            seletorResultado.innerHTML = `<p>Seu IMC é: ${resultadoSoma} (Sobrepeso)</p>`;
        }else if(resultadoSoma >= 30 && resultadoSoma <= 34.9){
            seletorResultado.innerHTML = `<p>Seu IMC é: ${resultadoSoma} (Obesidade grau 1)</p>`;
        }else if(resultadoSoma >= 35 && resultadoSoma <= 39.9){
            seletorResultado.innerHTML = `<p>Seu IMC é: ${resultadoSoma} (Obesidade grau 2)</p>`;
        }else if(resultadoSoma >= 40){
            seletorResultado.innerHTML = `<p>Seu IMC é: ${resultadoSoma} (Obesidade grau 3)</p>`;
        }else{
            seletorResultado.style.backgroundColor = 'rgb(139, 4, 63)';
            seletorResultado.innerHTML = `<p>Digite um valor numérico</p>`;
        }    
        
        const teste = eventoButton.target;
        console.log(teste);
    }

    seletorForm.addEventListener('submit', calculoIMC);
}

escopo();