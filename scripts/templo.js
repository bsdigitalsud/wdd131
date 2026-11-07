const anoAtual = new Date().getUTCFullYear();
document.querySelector("#anoatual").textContent = anoAtual;
const ultimaModificacao = document.lastModified;
document.querySelector("#ultimaModificacao").textContent = `Última modificação: ${ultimaModificacao}`;