var s = "hello, world";  // Declarando um novo texto

console.debug(s.charAt(0)); 			// => "h": Pega o primeiro caracter.
console.debug(s.charAt(s.length-1)); 	// => "d": Pega o último caracter.
console.debug(s.substring(1,4)); 		// => "ell": Pega a substring comecando do intervalo passado
console.debug(s.slice(1,4)); 			// => "ell": Pega a substring comecando do intervalo passado 
console.debug(s.slice(-3)); 			// => "rld": Obtém os ultimos 3 caracteres
console.debug(s.indexOf("l")); 			// => 2: Posição da primeira vez que aparece o 'l'
console.debug(s.lastIndexOf("l")); 		// => 10: Última posição em que o 'l' aparece 
console.debug(s.indexOf("l", 3)); 		// => 3: Posição do primeiro 'l' no ou após o indice 3
console.debug(s.split(", ")); 			/* => ["hello", "world"] separa a string em um array de 
										 *    strings usando a string de separação
										 */
console.debug(s.replace("h", "H")); 	// => "Hello, world": substitui a primeira instância de h por "H"
console.debug(s.toUpperCase()); 		// => "HELLO, WORLD": Eleva todos os caracteres para caixa alta
  