import { Dado, Quando, Entao } from 'cypress-cucumber-preprocessor/steps'
const { pedidosPage } = require('../../../support/page_objects')
const product = require('../../../fixtures/prodRequest.json')
const login = require('../../../fixtures/perfil.json')

Dado('que eu adicionei um produto no carrinho', () => {
    cy.addProduct(product.size, product.color, product.quantity, product.add_cart,
        product.product_id, product.variation_id)
})

Quando('eu finalizo o pedido', () => {
    cy.placeOrder(login.user, login.pass)
})

Entao('eu devo ver uma mensagem de sucesso ao realizar o pedido', () => {
    pedidosPage.validateOrderPlaced()
})
