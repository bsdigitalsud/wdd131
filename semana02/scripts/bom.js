const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const list = document.querySelector('ul');
botao.addEventListener('click', function() {
    if (input.value !== '') {
        const li = document.createElement('li');
        const botaoExcluir = document.createElement('button');
        li.textContent = input.value;
        botaoExcluir.textContent = '❌';
        botaoExcluir.setAttribute('aria-label','Excluir capítulo');
        botaoExcluir.addEventListener('click', function () {
            li.remove();    
        });
        li.append(botaoExcluir);
        list.append(li);
        input.value = '';
         }
        input.focus();
    
    });
