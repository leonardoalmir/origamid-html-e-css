console.log("Funcionando...");
// Uma const não pode ser reatribuida. let e var já podem.
console.log("--- SELECIONANDO ELEMENTO NO HTML ---");
const ul = document.querySelector("ul");
const produtos = document.querySelector("ul li a");
const cursos = document.querySelector(".cursos");
const titulo = document.querySelector("h2");

console.log(produtos);
// Retorna o conteúdo do elemento
console.log(produtos.innerHTML);
// Retorna a url
console.log(produtos.href);

// Altera o texto com funções de CSS
titulo.style.color = "#ffffff";
titulo.style.textTransform = "uppercase";
titulo.style.backgroundColor = "gray";
titulo.style.display = "inline-block";
titulo.style.padding = "1rem";

// Adiciona Classe
titulo.classList.add("ativo");

console.log("--- INFORMA as propriedades e metodeos ---");
// Informa as propriedades e metodeos que esse elemento possui
console.dir(ul); 

/** TIPOS DE DADOS */
/**
String
Number
Object
Array
Boolean
Null/undefined
*/

// String
console.log("--- STRING ---");
const texto = "JavaScript";
const texto2 = 'Curso de ';
console.log(texto2 + texto + "!");
console.log("Quantos caracteres tem a string 'JavaScript': " + texto.length);
console.log(texto.toUpperCase()); //Passando o texto para maiusculo


// Number
console.log("--- NUMBER ---");
let total = 0;
const compras = 30;
const imposto = 20;
const decimal = 2.99;
total = compras + imposto;
console.log(total);
const transformar = Number("20");
console.log(transformar);
const misto = 20 + "20";
console.log(misto); //O resultado é uma string.
console.log("Arredonda decimal: De 2.99 para " + decimal.toFixed()); //Arredonda valor para inteiro

// Object
console.log("--- OBJECT ---");
const nome = "Leonardo Almir"
const aluno = {
    nome: "Leonardo Almir",
    curso: "React",
    cpf: "085.641.066-71"
};

console.log(aluno);

//validando 
console.log(nome === aluno.nome); // O retorno aqui é true (verdadeiro)

/** FUNÇõES */
console.log("--- FUNÇõES ---");

//Função sem passar parâmetro/argumento
function logCurso() {
    const nome = "JavaScript";
    console.log(nome);
}

logCurso();

//Função passando parâmetro/argumento
function imprimeNomeCurso(nome) {
    const nomeCurso = nome;
    console.log(nomeCurso);
}

imprimeNomeCurso("PHP");

//Função passando mais de um parâmetro/argumento
function imprimeNomeCursoComParametros(nomeCurso, horasCurso) {
    const nome = nomeCurso;
    const horas = horasCurso;
    console.log(nomeCurso, horas);
}

imprimeNomeCursoComParametros("CSS",40);

//Funções com retorno
function imprimeNomeCursoRetorno(nomeDoCurso) {
    const nomeCurso = nomeDoCurso;
    return nomeCurso;
}

const cursoNome = imprimeNomeCursoRetorno("Laravel");
console.log(cursoNome);

//Função retornando objeto
function retornaObjeto () {
    const nome = "Bootstrap";
    const horas = "10";
    return {
        nomeDoCurso: nome,
        horasDeCurso: horas
    };
}

const cursoInfos = retornaObjeto();
console.log(cursoInfos);

// Simplificando o nome das chaves do objeto. Usando o mesmo nome do parametro
function retornaObjetoSimples (nome, horas) {
    return {
        nome,
        horas
    };
}

const cursoInfosSimples = retornaObjetoSimples("Tailwind", 15);
console.log(cursoInfosSimples);


/** EXERCÍCIO */
console.log("--- EXERCÍCIO ---");

function livro (nome, ano, autor) {
    const frase = nome + ' por ' + autor;
    return {
        nome: nome.toUpperCase(),
        anosDeLancamento: 2023 - ano,
        frasePronta: frase 
    };
}

const livroInfo = livro("O Senhor dos Anéis", 1954, "J. R. R. Tolkien");
console.log(livroInfo);
console.log(livroInfo.frasePronta);

/** MÉTODOS */
console.log("--- MÉTODOS ---");
//Métodos são funções dentro de objetos

const curso = {
    nome: "JavaScript",
    completar() {
        console.log("Curso completo de", this.nome); //Esse this é a mesma coisa de: curso.nome
    }
}

curso.completar();

/** EVENTOS */
//Documentação: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
console.log("--- EVENTOS ---");
//Selecionando o botão que tem a classe .ativar e jogando dentro do objeto: ativar
const ativar = document.querySelector(".ativar");
//Criando a função que ativarClick que dá um console.log passando uma string e o objeto que foi selecionado
function ativarClick () {
    console.log("Clicou em: ", ativar);
}
//Usando o método addEventListener com o argumento 'click', toda vez que eu clicar no botão, ele vai executar a função ativarClick
ativar.addEventListener('click', ativarClick);

/** EVENTOS hack */
const ativar2 = document.querySelector(".ativar2");
/** @param {MouseEvent} event  Isso deixa explicito para o JS o que é o event */
function ativarAoClick (event) {
    console.log(event); //Trazendo informações sobre esse evento de clique
    console.log(event.x); //Exibe a coordenada do eixo X que foi clicado para esse evendo acontecer
    console.log(event.y); //Exibe a coordenada do eixo Y que foi clicado para esse evendo acontecer
    console.log(event.timeStamp); //Exibe em milissegundos o tempo que o usuário demorou para acionar este evento, desde o momento que o site foi aberto até o momento do acionamento. Dá pra saber quanto tempo o usuário demorou para clicar no botão de comprar, por exemplo.
    console.log(event.currentTarget); //Exibe o elemento que está sendo adicionado o evento
}

ativar2.addEventListener('click',ativarAoClick);

/** INTERAÇÕES */
//Ao clicar no botão ele vai adicionar ou remover a classe mostrar no paragrafo.
console.log("--- INTERAÇÕES ---");
const botao = document.querySelector(".botao-paragrafo");

function mostrarParagrafo() {
    const texto = document.querySelector(".texto");
    texto.classList.toggle("mostrar");
}

botao.addEventListener('click', mostrarParagrafo);

/** INTERAÇÕES com O Objeto: WINDOW */
//Ao clicar no botão ele vai adicionar ou remover a classe mostrar no paragrafo.
console.log("--- INTERAÇÕES com O Objeto: WINDOW ---");
console.log(window); //Esse objeto tem vários métodos e propriedades que trazem informações importantes

console.log("Altura da tela:", window.innerHeight);
console.log("Largura da tela:", window.innerWidth);


// Função para mostrar as coordenadas do mouse na tela.
function coordenadaMouse (event) {
    const coordenadas = {
        x: event.x,
        y: event.y
    }
    console.log(coordenadas);
}
window.addEventListener('mousemove', coordenadaMouse);


// Função para mostrar se ativou o scroll do mouse.
function usouScroll() {
    console.log("Ativou o scroll");
}

window.addEventListener('scroll', usouScroll);

// Função para mostrar a distância da barra de scroll e o topo.
function distanciaScroll() {
    console.log("Distância scroll do topo: ", window.scrollY);
}

window.addEventListener('scroll', distanciaScroll);

/** EXERCÍCIO 2*/
console.log("--- EXERCÍCIO 2 ---");

// Essa foi a função inicial que criei
// function seguir(event) {
//     const bolinha = document.querySelector(".bolinha");
//     const x = event.x;
//     const y = event.y;
//     bolinha.style.top = y+"px";
//     bolinha.style.left = x+"px";
// }


// Agora essa executa a mesma coisa de forma otimizada/simplificada
const bolinha = document.querySelector(".bolinha"); //Coloquei a seleção do elemento do lado de fora
function seguir(event) {
    bolinha.style.top = event.y+"px";
    bolinha.style.left = event.x+"px";
}

window.addEventListener('mousemove', seguir);