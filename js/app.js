function enviar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;

    console.log(nome, idade, cidade);
    alert("Olá " + nome + ", entâo você tem " + idade + " anos e mora em " + cidade + ".");

}