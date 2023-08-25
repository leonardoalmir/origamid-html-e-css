/* 1102 Manipular DOM */
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
console.log(livro.nome.toUpperCase()); //passa pra maiúscula
console.log(2023 - livro.ano);
console.log(2023 - filme.ano);

console.log (livro.nome === nome);

/* Testando da minha cabeça kkk */
if (livro.nome === nome) {
    console.log("São iguais")
} else {
    console.log("Não são iguais")
}

console.log(livro.nome.length); //quantidade de caracteres

const texto = document.querySelector("p");
console.log(texto.innerHTML); //o texto que tá dentro da tag
console.log(texto.clientHeight); //mostra a altra em pixels que esse objeto ocupa na tela.

const decimal = 2.99;
console.log(decimal.toFixed()); //arredonda o decimal pra um inteiro, mas retorna como string
console.log(Number(decimal.toFixed())) //transformando a string em número usando a função Number()

/* 1105 Funções 1 */

function logCurso() {
    const nome = "JavScript";
    console.log(nome);
}

logCurso();
logCurso();

// Usando argumentos

function logCursoArgs(nome) { //definindo o parâmetro nome
    console.log(nome);
}
logCursoArgs("HTML"); //Passando argumento pra função

// Multiplos argumentos
function logCursoMultArgs(nome, horas) {
    console.log(nome, horas, "horas");
}

logCursoMultArgs("CSS",40);

// Retorno
// Toda função retorna um valor (tipo de dado). Se não for declado usando a palavra return, o valor retornado será undefined.
function logCursoRetorno(nome, horas){
    console.log(nome, horas);
    return "Teste";
}

const pegaRetorno = logCursoRetorno("JS", 60);
console.log(pegaRetorno); //Retorna Teste

// Pra fazer mais sentido...
function logCursoRetorno2(nome, horas){
    console.log(nome, horas);
    return horas;
}
const pegaRetorno2 = logCursoRetorno2("Bootstrap", 60);
console.log(pegaRetorno2);

// Retornando Objeto
