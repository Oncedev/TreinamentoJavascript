console.debug(Infinity); 					// Variavel inicializada com o valor infinito
console.debug(Number.POSITIVE_INFINITY); 	// Mesmo valor mas read-only
console.debug(1/0); 						// Divisão que retorna para infinito
console.debug(Number.MAX_VALUE + 1); 		// Avalia como 1.7976931348623157e+308

console.debug(Number.NEGATIVE_INFINITY); 	// Avalia como infinito negativo
console.debug(-Infinity); 					// Avalia como infinito negativo
console.debug(-1/0); 						// Avalia como infinito negativo
console.debug(-Number.MAX_VALUE - 1);		// Avalia como -1.7976931348623157e+308

console.debug(NaN); 						// Not a Number ou Não é um número
console.debug(Number.NaN); 					// Mesmo valor mas read-only
console.debug(0/0); 						// Avaliado como NaN

console.debug(Number.MIN_VALUE/2); 			// Avalia como zero
console.debug(-Number.MIN_VALUE/2); 		// Zero negativo
console.debug(-1/Infinity); 				// Zero negativo
console.debug(-0);							// Zero