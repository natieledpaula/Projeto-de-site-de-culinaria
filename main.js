// Simulação de adição de itens de pedido
// Seleciona todos os botões que possuem a classe 'adicionar'
const botoesAdicionar = document.querySelectorAll('.adicionar');
// Selecionar a lista onde os itens do pedido serão exibidos
const listaPedido = document.getElementById('lista-pedido');
// Seleciona o elemento que exibirá o valor total do pedido
const totalElemento = document.getElementById('total');
// Criar variável que armazena o total do pedido 
let total = 0;
// Percorre todos os botões 'Adicionar' e adiciona um evento de clique em cada um
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Obtem o elemento pai do botao
        const produto = botao.parentElement;

        // Obtém o nome do produto a partir do texto da tag <h3>
        const nome = produto.querySelector('h3').textContent;

        // Obtem o preço do produto, removendo o texto "R$" e converte o valor para decimal
        const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$", ""));

        // Obtem um novo item de lista <li> para adicionar o produto ao pedido
        const itemPedido = document.createElement('li');

        itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

        // Adiciona o item criado á lista de pedidos
        listaPedido.appendChild(itemPedido);

        // Atualiza o total da compra
        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

// Simula finalização do pedido
const botaoFinalizarPedido = document.getElementById('finalizar-pedido');
botaoFinalizarPedido.addEventListener("click", () => {
    alert("Pedido finalizado com sucesso " + totalElemento.textContent);

    listaPedido.innerHTML = '';

    total = 0;

    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});