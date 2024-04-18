Funcionalidade: Login
Cenário: Login bem-sucedido com Usuário Ativo
Dado que eu acesso a página da minha conta
Quando eu inserir o usuário ativo "<user>" e a senha "<pass>"
Então eu devo ver uma mensagem de sucesso ao fazer login

Cenário: Mensagem de Validação ao Fazer Login com Usuário Inválido
Dado que eu acesso a página da minha conta
Quando eu inserir o usuário inválido "<user>" e a senha "<pass>"
Então eu devo ver uma mensagem de validação

Cenário: Mensagem de Aviso ao Fazer Login com Senha Incorreta
Dado que eu acesso a página da minha conta
Quando eu inserir o usuário ativo "<user>" e a senha incorreta "<pass>"
Então eu devo ver uma mensagem de aviso
        
