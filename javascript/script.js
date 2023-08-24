// 1102 Manipular DOM
const nav = document.querySelector("nav");
const produtos = document.querySelector(".produtos a");

console.log(nav);
console.dir(nav);

console.log(produtos);

console.log(produtos.innerHTML);
console.log(produtos.href);

produtos.remove();

nav.style.backgroundColor = "black";
nav.style.padding = "1rem";
nav.classList.add("ativo");

/* Continuando... 1104 Objetos */

const nome = "O Senhor dos Anéis";
const ano = 1954;
const autor = "J. R. R. Tolkien";

const nomeFilme = "O Senhor dos Anéis";
const anoFilme = 2001;
const ditretorFilmne = "Peter Jackson";

const livro = {
    nome: "O Senhor dos Anéis",
    ano: 1954,
    autor: "J. R. R. Tolkien"
}

const filme = {
    nome: "O Senhor dos Anéis",
    ano: 2001,
    autor: "J. R. R. Tolkien",
    diretor: "Peter Jackson"
}

console.log (livro);
console.log(livro.nome.toUpperCase());
console.log(2023 - livro.ano);
console.log(2023 - filme.ano);

console.log (livro.nome === nome);

/* Testando da minha cabeça kkk */
if (livro.nome === nome) {
    console.log("São iguais")
} else {
    console.log("Não são iguais")
}

console.log(livro.nome.length);

const texto = document.querySelector("p");
console.log(texto.innerHTML);
console.log(texto.clientHeight); //mostra a altra em pixels que esse objeto ocupa na tela.


