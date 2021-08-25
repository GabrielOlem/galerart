Feature: Permitir que críticos possam criticar exposições, artistas e obras, abrindo espaço para sua curadoria

Cenário 1: Espaço reservado para críticos.
Dado que eu sou um crítico
E já estou cadastrado como um
Quando eu entrar na tela para críticos
Então irei ver todo o espaço reservado para críticos.

Cenário 2: Listagem de exposições, artistas e obras.
Dado que eu sou um crítico
E estou no espaço para críticos
Quando eu entrar na tela listagem
Então irei ver a lista das exposições, artistas e obras.

Cenário 3: Criação da crítica.
Dado que eu sou um crítico
E estou na listagem de exposições, artistas e obras
Quando eu entrar em alguma das telas
Então irei ver um espaço para criar uma crítica
E poderei ou não criar uma.

Cenário 4: Exibição da crítica na sessão da exposição, artista ou obra.
Dado que eu sou um usuário cadastrado
E estou na listagem de exposições, artistas e obras
Quando eu entrar em alguma das telas
Então irei ver um espaço indicando que há críticas sobre aquele item
E poderei ou não abrir essa crítica para ler.

Cenário 5: Criação da crítica - falha.
Dado que eu sou um crítico
E estou na listagem de exposições, artistas e obras
Quando eu entrar em alguma das telas
Então não irei ver um espaço para criar uma crítica

Cenário 6: Exibição da crítica na sessão da exposição, artista ou obra - falha.
Dado que eu sou um usuário cadastrado
E estou na listagem de exposições, artistas e obras
Quando eu entrar em alguma das telas
Então não irei ver um espaço indicando que há críticas sobre aquele item
E não saberei que há críticas a serem vistas

Cenário 7: Espaço reservado para críticos -falha.
Dado que eu sou um crítico
E não estou cadastrado como um
Quando eu entrar na tela para críticos
Então não irei ver todo o espaço reservado para críticos.

Cenário 8: Listagem de exposições, artistas e obras - falha.
Dado que eu não sou um crítico
E estou no espaço para críticos
Quando eu entrar na tela listagem
Então não irei ver a lista das exposições, artistas e obras.
E não saberei o que está acontecendo

Cenário 9: Listagem.
Dado que eu sou um crítico
E estou no espaço para críticos
Quando eu entrar na tela listagem
Então irei ver a lista das exposições, artistas e obras.

Cenário 10 (teste): Listagem.
Dado que eu sou um crítico
E estou no espaço para críticos
Quando eu entrar na tela listagem
Então irei ver a lista das exposições, artistas e obras.