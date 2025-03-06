function adicionar() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];

    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return;
    }
    
    let valor = parseInt(document.getElementById("valor-total").innerHTML.split("R$")[1]);
    let valorProduto = parseInt(produto.split("R$")[1]);
    let valorTotalProduto = quantidade * valorProduto;
    
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorTotalProduto}</span>
    </section>`;
    
    let valorFinal = valor + valorTotalProduto;
    let resultadoFinal = document.getElementById("valor-total").innerHTML = `R$${valorFinal}`; 

    document.getElementById("quantidade").value = "";
}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0";
}