Funcionalidade: Inclusão de produtos ao Carrinho
Como cliente da EBAC-SHOP
Quero adicionar produtos no carrinho
Para realizar a compra dos itens
Critério de aceitação: Não deve permitir adicionar produtos sem estoque.

Cenário: Adição de produto em estoque
Dado que eu acesse a página de produtos da EBAC-SHOP
Quando eu selecionar o produto “Augusta Pullover Jacket”
E eu selecionar o tamanho SHOP
E eu selecionar a cor Orange
E eu informar a quantidade igual a 10
E eu clicar no Botão COMPRAR
Então deve exibir uma mensagem de “produto sem estoque”
Critério de aceitação: Deve Incluir o item ao carrinho com sucesso.

Cenário: Não deve permitir adicionar uma quantidade de produto superior a 76
Dado que eu acesse a página de produtos da EBAC-SHOP
Quando eu selecionar o produto “Augusta Pullover Jacket”
E eu selecionar o tamanho SHOP
E eu selecionar a cor Orange
E eu informar a quantidade igual a 100
E eu clicar no Botão COMPRAR
Então deve exibir uma mensagem de “O valor deve ser menor ou igual a 76.”
Critério de aceitação: Deve Incluir o item ao carrinho com sucesso.

Cenário: Mensagem de produto sem estoque
Dado que eu acesse a página de produtos da EBAC-SHOP
Quando eu selecionar o produto “camisa Brasil”
E eu selecionar o tamanho M
E eu clicar no Botão COMPRAR
Então deve exibir uma mensagem de “Desculpe, este produto não está disponível. Escolha uma combinação diferente.”
Critério de aceitação: Não Deve Incluir o intem ao carrinho.

Cenário: Compra realizada com sucesso
Dado que eu acesse a página meu carrinho da EBAC-SHOP
Quando eu inserir os dados para pagamento
E eu clicar em concluir
Então deve exibir uma mensagem de “Pagamento aprovado - Compra efetuada com sucesso"
