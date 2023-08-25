function livro(nome, ano, autor) {
    const nomeMaior = nome.toUpperCase();
    const anosPassados = (2023 - ano);
    const frase = (nome + ' por ' + autor);
    const objeto = {
        nome: nomeMaior,
        anosPassados,
        frase
    }
    return objeto;
}

retorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');

console.log(retorno.frase);

// Escrevendo a função sem declarar as variaveis no corpo da função... Podemos fazer assim, pois não estamos usando as variaveis dentro do escopo da função.

function livroSimplificado(nome, ano, autor) {
    const objeto = {
        nome: nome.toUpperCase(),
        anosPassados: (2023 - ano),
        frase: (nome + ' por ' + autor)
    }
    return objeto;
}

outroRetorno = livroSimplificado("Mindset: A Nova Psicologia do Sucesso", 2006, "Carol Dweck");

console.log(outroRetorno.frase);

// Da pra simplificar ainda mais, pois não precisamos criar um objeto e depois retornar ele... Podemos já criar o objeto no return:

function livroMaisSimplificado(nome, ano, autor) {
    return {
        nome: nome.toUpperCase(),
        anosPassados: (2023 - ano),
        frase: (nome + ' por ' + autor)
    };
}

retornoMaisSimplificado = livroMaisSimplificado("O Poder do Hábito", 2012, "Charles Duhigg");

console.log(retornoMaisSimplificado.frase);