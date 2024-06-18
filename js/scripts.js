document.addEventListener('DOMContentLoaded', async function() {
    
    // Carrega o conteúdo do header.html
    const response = await fetch('Shared/header.html');
    const data = await response.text();

    document.getElementById('header').innerHTML = data;

    //Redirecionamento do botão Início no menu do cabeçalho header.html
    var inicio = document.getElementById('inicio');
    if (inicio) {
        inicio.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    } else {
        console.error('Elemento com ID "inicio" não encontrado no cabeçalho.');
    }

    //Redirecionamento do botão Aulas no menu do cabeçalho header.html
    var aulas = document.getElementById('aulas');
    if (aulas) {
        aulas.addEventListener('click', function () {
            window.location.href = '../aulas.html';
        });
    } else {
        console.error('Elemento com ID "aulas" não encontrado no cabeçalho.');
    }

    //Redirecionamento do botão Loja Virtual no menu do cabeçalho header.html
    var loja = document.getElementById('loja');
    if (loja) {
        loja.addEventListener('click', function () {
            window.location.href = '../loja.html';
        });
    } else {
        console.error('Elemento com ID "loja" não encontrado no cabeçalho.');
    }

    //Redirecionamento do botão Sobre no menu do cabeçalho header.html
    var sobre = document.getElementById('sobre');
    if (sobre) {
        sobre.addEventListener('click', function () {
            window.location.href = '../sobre.html';
        });
    } else {
        console.error('Elemento com ID "sobre" não encontrado no cabeçalho.');
    }

    //Redirecionamento do botão Contato no menu do cabeçalho header.html
    var contato = document.getElementById('contato');
    if (contato) {
        contato.addEventListener('click', function () {
            window.location.href = '../contato.html';
        });
    } else {
        console.error('Elemento com ID "contato" não encontrado no cabeçalho.');
    }
});
