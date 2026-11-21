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

const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },


  {
    nomeDoTemplo: "Rio de Janeiro Brasil",
    localizacao: "Rio de Janeiro, Brasil",
    consagracao: "2022, 8 de maio",
    area: 29966,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/babb14dad30611ecafedeeeeac1ebc39ad94142b/full/800,/0/default"
  },
  {
    nomeDoTemplo: "Ogden Utah",
    localizacao: "Ogden, Utah, Estados Unidos",
    consagracao: "1972, 18 de janeiro",
    area: 112232,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/bd2ff8df8ff328fdf5f73cd509e6907a6aa2bb77/full/800,/0/default"
  },
  {
    nomeDoTemplo: "Fort Lauderdale Florida",
    localizacao: "Davie, Flórida, Estados Unidos",
    consagracao: "2014, 4 de maio",
    area: 30500,
    urlDaImagem: "https://www.churchofjesuschrist.org/imgs/5cb99275640cb6f5d97902337d227c2a8dc02745/full/,500/0/default"
  },

];

const galeria = document.querySelector(".galeria");

function mostrarTemplos(listaTemplos) {
    galeria.innerHTML = "";

    listaTemplos.forEach((templo) => {
        const ano = Number(templo.consagracao.split(",")[0]);

        const cartao = document.createElement("figure");
        const imagem = document.createElement("img");
        imagem.src = templo.urlDaImagem;
        imagem.alt = templo.nomeDoTemplo;
        imagem.loading = "lazy";
        cartao.appendChild(imagem);

        const titulo = document.createElement("h3");
        titulo.textContent = templo.nomeDoTemplo;
        cartao.appendChild(titulo);

        const local = document.createElement("p");
        local.textContent = templo.localizacao;
        cartao.appendChild(local);

        const data = document.createElement("p");
        data.textContent = `Consagração: ${templo.consagracao}`;
        cartao.appendChild(data);

        const area = document.createElement("p");
        area.textContent = `Área: ${templo.area} pés quadrados`;
        cartao.appendChild(area);

        galeria.appendChild(cartao);
    });
}

mostrarTemplos(templos);

document.querySelector("#antigo").addEventListener("click", () => {
    const templosAntigos = templos.filter((templo) => {
        const ano = Number(templo.consagracao.split(",")[0]);
        return ano < 1900;
    });

    mostrarTemplos(templosAntigos);
});

document.querySelector("#novo").addEventListener("click", () => {
    const templosNovos = templos.filter((templo) => {
        const ano = Number(templo.consagracao.split(",")[0]);
        return ano > 2000;
    });

    mostrarTemplos(templosNovos);
});

document.querySelector("#grande").addEventListener("click", () => {
    const templosGrandes = templos.filter((templo) => {
        return templo.area > 90000;
    });

    mostrarTemplos(templosGrandes);
});

document.querySelector("#pequeno").addEventListener("click", () => {
    const templosPequenos = templos.filter((templo) => {
        return templo.area < 10000;
    });

    mostrarTemplos(templosPequenos);
});

document.querySelector("#inicio").addEventListener("click", () => {
    mostrarTemplos(templos);
});