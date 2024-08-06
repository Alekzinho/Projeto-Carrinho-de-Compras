function adicionar() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    
    if (isNaN(quantidade)) {
        quantidade = 1;
    }

    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0];
    
    let valor = parseInt(document.getElementById("valor-total").innerHTML.split("R$")[1]);
    let valorProduto = parseInt(produto.split("R$")[1]);
    let valorTotalProduto = quantidade * valorProduto;
    
    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
    <section class="carrinho__produtos__produto">
      <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
    </section>`;
    
    let valorFinal = valor + valorTotalProduto;
    let resultadoFinal = document.getElementById("valor-total").innerHTML = `R$${valorFinal}`; 

}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0";
}