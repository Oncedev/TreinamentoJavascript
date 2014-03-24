var pessoa = {
	nome: "Paulo",
	nacionalidade: "Brasil",
	idade: 25
};


// Acessando propriedades
console.debug(pessoa.nome);
console.debug(pessoa['nacionalidade']);

// Testando propriedades
console.debug("nome" in pessoa);
console.debug("endereco" in pessoa);
console.debug(pessoa.nome != undefined);
console.debug(pessoa.endereco != undefined);

// Enumerando as propriedades de um objeto

function extend(o, p) { 
	for(prop in p) {
		o[prop] = p[prop];
	}

	return o; 
}

var trabalhador = {
	salario: 760.0
};

trabalhador = extend(trabalhador, pessoa);
console.debug(trabalhador.nome);
console.debug(trabalhador['nacionalidade']);
console.debug(trabalhador['salario']);

// Getters and Setters
var projeto = {

	_custo: 5,

	get custo() { 
		return this._custo;
	},
	set custo(value) { 
		if (value <= 0) {
			return;
		} else {
			this._custo = value;
		}
	}
}

projeto.custo = -2;
console.debug(projeto.custo);

projeto.custo = 10;
console.debug(projeto.custo);

projeto._custo = -5;
console.debug(projeto._custo);


