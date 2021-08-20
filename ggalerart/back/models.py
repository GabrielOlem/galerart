from django.db import models

# Create your models here.
# artista, usuariofinal, galeria, exposições, obra de arte

class User(models.Model):

    class Meta:

        db_table = 'user'

    nomeUsuario = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    password = models.CharField(max_length=20)
    

    def __str__(self):
        return self.nomeUsuario