function enviar() {
    
    //Atividade 2: Obtendo e exibindo valores do formulário
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    console.log(nome, idade, cidade);
    
    //Atividade 3: Mudando o parágrafo com JS
    let novaMensagem = document.getElementById("mensagem");
    novaMensagem.textContent = `Espero que você tenha se divertido ${nome}, e que nesses ${idade} anos de vida você tenha realizado seus objetivos, sem dúvida seus amigos de ${cidade} sentem orgulho de você.`
    
}

// Atividade 4: Soma de dois números
let numero1 = 45;
let numero2 = 55;
let resultado = numero1 + numero2;
console.log(`Você sabia que a soma de ${numero1} com ${numero2} é igual a ${resultado}?`);

//Atividade 5: Separando sentenças
let duasSentenca = "Eu gosto de gato; Eu gosto de cachorro";
console.log(duasSentenca.split(";"));

//Atividade 6: Separando números
let numeros = "1,2,3,4,5,6,7,8,9,10";
console.log(numeros.split(","));
