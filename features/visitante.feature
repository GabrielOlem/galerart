Feature: As a visitante
    Eu quero ser capaz de ver exposições, artistas, Galerias, indicações e favoritar qualquer uma delas
    Assim, eu posso ter acesso ao conteúdo artístico do Sistema

Scenario: ver exposição de uma Galeria
	Given Eu sou um visitante  
    And Eu estou na página da Galeria 'ArtSoul'
	And Eu consigo ver a lista de exposições
	When Eu clico em 'Ver Exposição' na 'Expo Paraíso na Terra'
    Then O sistema me leva à página da exposição 'Expo Paraíso na Terra'

Scenario: ver artista integrante de uma Galeria
	Given Eu sou um visitante  
	And Eu estou na página da Galeria 'ArtSoul'
	And Eu consigo ver lista de artistas integrantes
	When Eu clico em 'Mauro Andrade'
    Then O sistema me leva à página do artista Mauro Andrade

Scenario: ver a exposição que um artista integrante de uma Galeria participa
	Given Eu sou um visitante  
	And Eu estou na página da Galeria 'ArtSoul'
	And Eu consigo ver lista de artistas integrantes
	When Eu clico em 'Ver Exposição que participa' na área do Artista 'Mauro Andrade'
    Then O sistema me leva à página da Exposição 'Expo Paraíso na Terra', que o artista participa

Scenario: Lista de exposições
	Given Eu sou um visitante  
    And Eu estou na página inicial 
	And Eu consigo ver a lista de exposições recomendadas
	When Eu clico na exposição 'Melhor Expo'
    Then O sistema me leva à pagina da Exposição 'Melhor Expo'
    And Eu consigo ver informações completas da exposição 'Melhor Expo'

Scenario: Adicionar uma exposição recomendada à lista de interesses
	Given Eu sou um visitante  
    And Eu estou na página inicial 
	And Eu consigo ver a lista de exposições recomendadas
	When Eu clico no ícone de coração na exposição 'Melhor Expo'
    Then O sistema salva a exposição 'Melhor Expo' à minha lista de interesses
    And O sistema me retorna uma mensagem de sucesso

Scenario: Adicionar uma exposição à lista de interesses
	Given Eu sou um visitante  
    And Eu estou na página da exposição 'Degas'
    When Eu clico no ícone de coração da exposição 'Degas'
    Then O sistema salva a exposição 'Degas' à minha lista de interesses
    And O sistema me retorna uma mensagem de sucesso

Scenario: Você também pode gostar dessas outras indicações relacionadas
    Given Eu sou um visitante  
    And Eu estou na página da exposição 'Segredos'
	And Eu consigo ver o aviso de outras indicações relacionadas
	When Eu clico no aviso
    Then Eu consigo visualizar uma lista de exposições relacionadas à exposição que estou vendo

Scenario: selecionar um artista
	Given Eu sou um visitante  
    And Eu estou na lista de artistas
	And Eu consigo ver os ícones dos artistas
	When Eu clico no artista 'Romero Britto'
    Then O sistema me leva à página do artista Romero Britto

Scenario: selecionar uma galeria
	Given Eu sou um visitante  
    And Eu estou na lista de galerias
	And Eu consigo ver os ícones das galerias
	When Eu clico na galeria 'Art Soul'
    Then O sistema me leva à página da galeria 'Art Soul'

Scenario: selecionar uma exposição
	Given Eu sou um visitante  
    And Eu estou na lista de exposições
	And Eu consigo ver os ícones das exposições
	When Eu clico na exposição 'Expo Paraíso na Terra'
    Then O sistema me leva à página da exposição 'Expo Paraíso na Terra'


#criar cenario para ir p perfil do usuario