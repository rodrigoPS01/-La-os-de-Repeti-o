const formulario = document.querySelector('#formulario');
const num = document.querySelector('#num');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    

    let fatorial = 1;
    let fibonacci = [0, 1];
    
    const n = parseInt(num.value);

    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }

    for (let i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    resultado.innerHTML = '';

    const resposta_fatorial = document.createElement('h2');
    resposta_fatorial.textContent = `O fatorial de ${n} é ${fatorial}`;
    resultado.appendChild(resposta_fatorial);

    const resposta_fibonacci = document.createElement('h2');
    resposta_fibonacci.textContent = `A sequência de Fibonacci até ${n} é [${fibonacci.slice(0, n + 1).join(', ')}]`;
    resultado.appendChild(resposta_fibonacci);
});
