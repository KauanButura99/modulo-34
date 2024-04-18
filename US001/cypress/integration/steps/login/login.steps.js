import { Dado, Quando, E, Entao } from 'cypress-cucumber-preprocessor/steps'
const { faker } = require('@faker-js/faker')
const { loginPage, homePage } = require('../../../support/page_objects')
const login = require('../../../fixtures/perfil.json')

Dado('que eu acesso a página da minha conta', () =>{
    cy.visit('/minha-conta')
})

Quando('eu inserir o usuário ativo {string} e a senha {string}', () =>{
   cy.login(login.user, login.pass)
    
})

Quando('eu inserir o usuário inválido {string} e a senha {string}', () =>{
    cy.login(login.invalid, login.pass)     
 })

 Quando('eu inserir o usuário ativo {string} e a senha incorreta {string}', () =>{
    cy.login(login.user, login.wrong)     
 }) 

Entao('eu devo ver uma mensagem de sucesso ao fazer login', () => {
    homePage.validateAccess()
})

Entao('eu devo ver uma mensagem de validação', () => {
    loginPage.validateInvalidUser()
})

Entao('eu devo ver uma mensagem de aviso', () => {
    loginPage.validateWrongPassword()
})
