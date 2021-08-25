  
Feature: Receber sugestões de exposições
Como usuário cadastrado no sistema eu gostaria de receber sugestões de exposições
Para que eu possa ficar por dentro das exposições que estão acontecendo e visitá-las.

Cenário 1: Apresentar ao usuário cadastrado exposições de categorias e artistas pelos quais ele se interessa.
Dado que eu sou um usuário cadastrado
E já escolhi os meus interesses na tela de cadastro
Quando eu entrar na tela de sugestões
Então irei ver as exposições que se encaixam nas categorias de meu interesse que estão acontecendo
E exposições de artistas que me interessam.

Cenário 2: Apresentar ao usuário cadastrado exposições de categorias e artistas que ele ainda não conhece, mas pode gostar.
Dado que eu sou um usuário cadastrado
E já escolhi os meus interesses na tela de cadastro
Quando eu entrar na tela de sugestões
Então irei ver as exposições de categorias que eu não conheço ainda
E exposições de artistas que eu não conheço ainda
E que o sistema acredita que eu possa gostar.

Cenário 3: Apresentar ao usuário cadastrado exposições que estão acontecendo próximas à localização dele.
Dado que eu sou um usuário cadastrado
E já informei a minha localização na tela de cadastro
Quando eu entrar na tela de sugestões
Então irei ver as exposições que estão ocorrendo em locais próximos à onde eu estou.
Then teste para relatório

Cenário 3-2(teste): Apresentar ao usuário cadastrado exposições que estão acontecendo próximas à localização dele.
Dado que eu sou um usuário cadastrado
E já informei a minha localização na tela de cadastro
Quando eu entrar na tela de sugestões
Então irei ver as exposições que estão ocorrendo em locais próximos à onde eu estou.

Cenário 3-3(teste): Apresentar ao usuário cadastrado exposições que estão acontecendo próximas à localização dele.
Dado que eu sou um usuário cadastrado
E já informei a minha localização na tela de cadastro
Quando eu entrar na tela de sugestões
Então irei ver as exposições que estão ocorrendo em locais próximos à onde eu estou.