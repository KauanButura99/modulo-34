import { Dado, Quando, E, Entao } from 'cypress-cucumber-preprocessor/steps'
const { produtoPage, carrinhoPage } = require('../../../support/page_objects')
const produto = require('../../../fixtures/produtos.json')


Dado('Que acesse a página EBAC-Shop/produtos', () => {
    cy.visit("produtos/")
})

Quando('eu adiciono o produto ao carrinho', () => {
    produtoPage.inserirProduto(produto[3].produto, produto[3].tamanho, produto[3].cor, produto[3].quantidade)
})

E('então eu vou para o carrinho', () => {
    produtoPage.clicarBotaoCarrinho()
})

Entao('eu devo ver o produto no carrinho', () => {
    carrinhoPage.validateProduct()
})
