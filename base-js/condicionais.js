/** FUNÇõES */
console.log("--- FUNÇõES ---");

// Estrutura simples
if (true) {
    console.log("Executa no if");
} else {
    console.log("Executa no else");
}

// Função Boolean()
var codicao = "";
console.log(Boolean(codicao)); //Falso
var codicao = " ";
console.log(Boolean(codicao)); //Verdadeiro
var codicao = "Qualquer string";
console.log(Boolean(codicao)); //Verdadeiro
var codicao = 20;
console.log(Boolean(codicao)); //Verdadeiro
var codicao = -20;
console.log(Boolean(codicao)); //Verdadeiro
var codicao = 0;
console.log(Boolean(codicao)); //Falso
var codicao = null;
console.log(Boolean(codicao)); //Falso
var codicao = undefined;
console.log(Boolean(codicao)); //Falso
var codicao = document.querySelector("body");
console.log(Boolean(codicao)); //Verdadeiro
var codicao = document.querySelector("p"); //Como não existe, ele vai retornar null e null é falso
console.log(Boolean(codicao)); //Falso

//A maneira de correta de trabalhar com eventos é testando se ele existe primeiro
const elemento = document.querySelector("p");
if (elemento) {
    elemento.addEventListener('click');
}

// Como não existe a tag <p> no nosso html, ele vai retornar false e não vai entrar no if.
// Se não fizesse o teste, o arquivo JS iria dar erro e parar de executar.

/** OPERADORES LÓGICOS */
// AND no JavaScript é usado com &&
// OR no JavaScript é usado com ||
// Exemplo:
const elemento1 = document.querySelector("p"); //Esse não existe no HTML
const elemento2 = document.querySelector("body"); //Esse existe no HTML

if (elemento1 || elemento2) {
    console.log("Excuta...");
}
//Neste caso o Executa... será mostrado pois ao menos um deles existe então o retorno é true.

if (elemento1 && elemento2) {
    console.log("Excuta...");
}
//Neste caso o Executa... NÃO será mostrado, pois neste caso as duas condições deveriam ser verdadeira, e como o p não existe, então o retorno é false.

/** OPERADORES DE COMPARAÇÃO */
 console.log("JavaScript" === "javascript"); // False IGUALDADE FORTE
 console.log("20" == 20); // True Essa é uma comparação fraca.. que não leva em conta o tipo
 console.log(30 !== 20); // True Esse é operador de DIFERENTE

 // COMPARANDO VALORES
 console.log(10 > 5); // 10 é maior que 5? True
 console.log(20 < 10); // 20 é menor que 10? False
 console.log(10 > 10); // 10 é maior ou igual a 10? True
 console.log(20 <= 30); // 20 é menor ou igual a 30? True

 // Usando com if
if (10 > 5) {
    console.log("Executa!");
} // Como 10 é maior que 5... Esse código será executado.

if (30 !== 20) {
    console.log("Executa!");
} // Como 30 é diferente de 20 ... Esse código será executado.

/** EXERCÍCIO */
// 1 - Crie um botão com nome de Adicionar.
// 2 - Adicione uma função (somar) ao clique desse botão
// 3 - Só adicione a função se o botão existir na tela.
// 4 - Crie uma div com o texto 0 dentro dela: <div>0</div>
// 5 - Na função do botão, pegue o total que estiver dentro da div e adicione + 1.
// 6 - Mude o valor da div para o novo total.
// 7 - Mude o valor apenas se o total for menor que 10.
// 8 - Quando não for mais possível adicionar, mostre uma mensagem no console.