function adicionar() {
    let quantidade = parseInt(document.getElementById("quantidade").value.trim());
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-", 1);
    let valorProduto = parseInt(produto.split("R$")[1]);
   

    if (isNaN(quantidade) || quantidade <=0) {
       alert("Selecione uma quantidade válida!");
       return;
    }

    let valorInicial = parseInt(document.getElementById("valor-total").textContent.split("R$")[1]);

    listaCarrinhodeCompras(quantidade,nomeProduto,valorProduto, valorInicial)
    
}

function listaCarrinhodeCompras(quantia, nome, preco, precoInicial) {
    let valorTotal = quantia * preco;
    let listaDeProdutos = document.getElementById("lista-produtos");
    listaDeProdutos.appendChild(document.createElement("section")).innerHTML = `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantia}x</span> ${nome} <span class="texto-azul">R$${preco}</span></section>`

    let totalDoCarrinho = document.getElementById("valor-total");
    totalDoCarrinho.innerHTML = `R$${precoInicial + valorTotal}`

}

function limpar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("valor-total").innerHTML = "R$0";
    document.getElementById("lista-produtos").innerHTML = ""

}

