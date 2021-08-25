Feature: As a usuário geral
    Eu quero ser capaz de entrar no sistema, modificar os dados e sair do sistema 
    Assim, eu posso ter a possibilidade de entrar e sair da minha conta

Scenario: O usuário escolhe se cadastrar
    Given eu sou um usuário geral
    And  estou na página inicial
    When eu seleciono o botão 'Cadastrar'
    Then o sistema me retorna uma página para realização de cadastro

Scenario: O usuário realiza o cadastro
    Given eu sou um usuário geral
    And  estou na página de cadastro de visitante
    When eu preencho o espaço nome para 'Maria', email para 'maria@gmail.com' e senha para 'euamoarte'
    And eu clico em concluir a ação
    Then  o sistema me retorna uma mensagem de sucesso
    
Scenario: O usuário escolhe realizar o login
    Given eu sou um usuário geral
    And  estou na página inicial
    When eu seleciono o botão 'Entrar'
    Then o sistema me retorna uma página para realização de login.

Scenario:  O usuário realiza seu login
    Given eu sou um usuário geral
    And  estou na página de login
    When eu preencho o email para 'maria@gmail.com' e senha para 'euamoarte'
    And eu clico para concluir a ação
    Then  o sistema retorna à página inicial com minha conta já logada

Scenario: O usuário não obtém sucesso ao tentar realizar seu login
    Given eu sou um usuário geral
    And  estou na página de login
    When eu preencho o email para 'maria@gmail.com' e senha para 'eunaogostodearte'
    And eu clico em concluir a ação
    Then  o sistema retorna uma mensagem de erro
    
Scenario: Após errar a senha, o usuário escolhe redefinir a senha
    Given eu sou um usuário geral
    And  estou na página de erro ao efetuar o login
    When clico em 'Esqueci minha senha'
    Then  o sistema me retorna uma página para redefinição de senha

Scenario: O usuário redefine sua senha 
    Given eu sou um usuário geral
    And  estou na página de redefinição de senha
    When preencho minha nova senha para 'arte123' e confirmo a nova senha para 'arte123'
    And eu clico para concluir minha ação
    Then  o sistema me retorna uma mensagem de sucesso
    And volta para a página inicial

Scenario: O usuário não obtém sucesso ao redefinir sua senha 
    Given eu sou um usuário geral
    And  estou na página de redefinição de senha
    When preencho minha nova senha para 'arte123' e confirmo a nova senha para '321arte'
    And eu clico para concluir minha ação
    Then  o sistema me retorna uma mensagem de erro
    And volta para a página de redefinição de senha

Scenario: O usuário sai da sua conta
    Given eu sou um usuário geral
    And  estou logado na minha conta
    When clico na opção 'sair' do meu perfil
    Then o sistema me retorna uma mensagem de sucesso
    And volta para a página inicial sem conta logada
    