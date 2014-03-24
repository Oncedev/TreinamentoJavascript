criarNamespace("OnceDev.Modelos.Aluno");
OnceDev.Modelos.Aluno = Class.extend({
    init: function(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
});

function criarNamespace(namespace) {
    var arrayNamespaces = [window];
    var namespaces = namespace.split('.');
    arrayNamespaces = arrayNamespaces.concat(namespaces);

    arrayNamespaces.reduce(function(x,y) {
        x[y] = x[y] || {};
        return x[y];
    });
}