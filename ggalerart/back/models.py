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

class Artist(models.Model):

    class Meta:

        db_table = 'artist'

    nomeArtistico = models.CharField(max_length=200) 
    usuario = models.ForeignKey('User', related_name='artists', on_delete=models.PROTECT)

    # galeria, exposições e obras  
    galeria = models.ForeignKey('Gallery', related_name='artists', on_delete=models.PROTECT)
    
    def __str__(self):
        return self.nomeArtistico

class Gallery(models.Model):

    class Meta:

        db_table = 'gallery'

    nome = models.CharField(max_length=200) 
    descricao =models.CharField(max_length=400)
    local = models.CharField(max_length=100)
    usuario = models.ForeignKey('User', related_name='galleries', on_delete=models.PROTECT)

    # galeria, exposições e obras  
    # galeria = models.ForeignKey('Gallery', related_name='artists', on_delete=models.PROTECT)
    
    def __str__(self):
        return self.nome

class FinalUser(models.Model):

    class Meta:

        db_table = 'FinalUser'

    nome = models.CharField(max_length=200) 
    gostos =models.CharField(max_length=400)
    interesses = models.CharField(max_length=100)
    usuario = models.ForeignKey('User', related_name='finaluser', on_delete=models.PROTECT)

    # galeria, exposições e obras  
    # galeria = models.ForeignKey('Gallery', related_name='artists', on_delete=models.PROTECT)
    
    def __str__(self):
        return self.nome

class Expo(models.Model):

    class Meta:

        db_table = 'expo'

    nome = models.CharField(max_length=200) 
    movimento = models.CharField(max_length=200) 
    tipo = models.CharField(max_length=200) 
    data = models.DateTimeField()
    descricao = models.CharField(max_length=400)
    precoEntrada = models.FloatField()
    avaliacaoUser = models.IntegerField()
    avaliacaoCritico = models.IntegerField()

    # galeria, exposições e obras  
    # galeria = models.ForeignKey('Gallery', related_name='artists', on_delete=models.PROTECT)
    
    def __str__(self):
        return self.nome

class GalleryExpo(models.Model):
    class Meta:

        db_table = 'galleryexpo'

    gallery = models.ForeignKey('Gallery', related_name='galleryexpo', on_delete=models.PROTECT)
    expo = models.ForeignKey('Expo', related_name='galleryexpo', on_delete=models.PROTECT)

class Art(models.Model):

    class Meta:

        db_table = 'art'

    nome = models.CharField(max_length=200) 
    corrente = models.CharField(max_length=200)
    tipo = models.CharField(max_length=200)  
    descricao = models.CharField(max_length=400)
    preco = models.FloatField() 
    artista = models.ForeignKey('Artist', related_name='art', on_delete=models.PROTECT)