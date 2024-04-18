/// <reference types="cypress" />

import { Dado, Quando, E, Entao } from 'cypress-cucumber-preprocessor/steps'
const { produtoPage, carrinhoPage } = require('../../../support/page_objects')
const produto = require('../../../fixtures/produtos.json')

Dado('Acesse a página EBAC-Shop/produtos', () => {
    cy.visit("produtos/")
})

Quando('Adicionar um produto no carrinho', () => {
    produtoPage.inserirProduto(produto[3].produto, produto[3].tamanho, produto[3].cor, produto[3].quantidade)
})

E('Ir até a página do carrinho', () => {
    produtoPage.clicarBotaoCarrinho()
})

Entao('Deve ser vizualizado o produtudo no carrinho ', () => {
    carrinhoPage.validateProduct()
})
