const anoAtual = new Date().getUTCFullYear();
document.querySelector("#anoatual").textContent = anoAtual;
const ultimaModificacao = document.lastModified;
document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${ultimaModificacao}`;
const botaoMenu = document.querySelector('#menu');
const navegacao = document.querySelector('nav');
botaoMenu.addEventListener('click', () =>
{
    if(navegacao.style.display === 'block') {
        navegacao.style.display = 'none';
        botaoMenu.textContent = '☰';
    }
    else {
        navegacao.style.display = "block";
        botaoMenu.textContent = "✕";
    }
    
});