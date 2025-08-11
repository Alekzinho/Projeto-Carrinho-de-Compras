function enviar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;

    let novaMensagem = document.getElementById("mensagem");
    novaMensagem.textContent = `Espero que você tenha se divertido ${nome}, e que nesses ${idade} anos de vida você tenha realizado seus objetivos, sem dúvida seus amigos de ${cidade} tem orgulho de você.`
    console.log(nome, idade, cidade);
    ;
}