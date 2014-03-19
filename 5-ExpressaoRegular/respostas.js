
// 1.
console.debug(numeros.match(/[1-9][0-9]{2,}/gi));

// 2.
console.debug(nomes.match(/[A-Za-z]*[aeiou]{2,}[A-Za-z]*/gi));

// 3.
console.debug(ceps.match(/[0-9]{8}|[0-9]{5}-[0-9]{3}/g));