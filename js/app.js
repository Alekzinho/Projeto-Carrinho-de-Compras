function enviar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;

    let novaMensagem = document.getElementById("mensagem");
    novaMensagem.textContent = `Espero que você tenha se divertido ${nome}, e que nesses ${idade} anos de vida você tenha realizado seus objetivos, sem dúvida seus amigos de ${cidade} sentem orgulho de você.`
    console.log(nome, idade, cidade);
}

let numero1 = 45;
let numero2 = 55;
let resultado = numero1 + numero2;

console.log(`Você sabia que a soma de ${numero1} com ${numero2} é igual a ${resultado}?`);

let duasSentenca = "Eu gosto de gato; Eu gosto de cachorro";
console.log(duasSentenca.split(";"));
