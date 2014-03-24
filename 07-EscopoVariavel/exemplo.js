var global = "escopo global";

function imprimeVariavelGlobal() {
	console.debug(global); // => escopo global
}

function imprimeVariavelLocal() {
	var global = "123"; 
	console.debug(global); // => 123
}

function imprimeVariavelGlobalValorAlterado() {
	console.debug(global); 
	var global = "123"; // => undefined
}

function imprimeVariabelComEscopoDeBloco() {

	console.debug(escopoBloco2); // => undefined

	if (true) {
		var escopoBloco1 = 123;		
	} else {
		var escopoBloco2 = 456;		
	}

	console.debug(escopoBloco1); // => 123
	console.debug(escopoBloco2); // => undefined
}

imprimeVariavelGlobal();
imprimeVariavelLocal();
imprimeVariavelGlobalValorAlterado();
imprimeVariabelComEscopoDeBloco();