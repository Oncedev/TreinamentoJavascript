function print (texto) {
	console.debug(texto + " => " + eval(texto));
}

print("1 == 1");
print("1 === 1");
print("\"1\" == \"1\"");
print("\"1\" === \"1\"");
print("1 == \"1\"");
print("1 === \"1\"");
print("false == false");
print("false === false");
print("null == undefined");
print("null === undefined");
print("1 == true");
print("1 === true");
print("\"1\" == true");
print("\"1\" === true");
