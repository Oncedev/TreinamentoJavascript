// Trabalhando com expressão regular

console.debug("Testando 1, 2, 3, Testando o Som, 1, 2, 3".replace(/\d+/g,"")); // Remove todos os números da string
console.debug("JavaScript".search(/script/i)); // Retorna o indice do primeiro match, no caso, 4

var frases = "são nomes de pessoas: Gabriel, Paulo, Pedro mas não são: batata, tomate nem mamão, mas Vladson é";
console.debug(frases.match(/[A-Z][a-z]+/g)); // Retorna os nomes que começam com zero

console.debug(new RegExp("[\\w+.]+@[\\w+.]+", "g").exec("testando, eita, paulo.ortins@gmail.com, testando eita")); // retorna o email na string
console.debug(new RegExp("[\\w+.]+@[\\w+.]+", "g").test("paulo.ortins@gmail.com")); // retorna true se tiver um email na string

