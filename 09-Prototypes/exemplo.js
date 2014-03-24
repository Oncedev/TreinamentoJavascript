// Usando Prototype

var Pessoa = {
	nome: "Paulo"
};

function FuncionarioOncedev() {}

FuncionarioOncedev.prototype = Pessoa;

var paulo = new FuncionarioOncedev();

console.debug(paulo.nome);

// Usando Object.Create

var paulo2 = Object.create(Pessoa);

console.debug(paulo2.nome);