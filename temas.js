// DOM - Document Object Model - Modelo de Objeto do Documento
//Transforma tudo na página em objetos. Cada objeto recebe atributos (propriedades) e métodos (funções) assossiadas a ele.

// Funções 
// function nomeDaFuncao (parâmetros) {corpo da função (o que ela vai fazer com os parâmtros) e o que ela vai retornar para quem a chamou)}

// Saber o tema atual e obter o elemento do tema atual;

// Saber onde está o atributo de tema

// Se o botão for clicado, então...
document.querySelector('#btTrocaTema').addEventListener('click', function trocaTema() {
    // pegar o elemento com o tema
    // se o tema for light, então mude o atributo para dark
    //se não for, então mude o atributo para light
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema', 'dark');
    } else {
        document.documentElement.setAttribute('data-tema', 'light');
    }
});
// Trocaro tema:
// 1. Pegar o elemento com tema
// 2. Apagar o atributo de tema atual
// 3. Escrever o atributo do novo tema