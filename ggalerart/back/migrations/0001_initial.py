# Generated by Django 3.2.6 on 2021-08-24 19:48

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Expo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('movimento', models.CharField(max_length=200)),
                ('tipo', models.CharField(max_length=200)),
                ('data', models.DateTimeField()),
                ('descricao', models.CharField(max_length=400)),
                ('precoEntrada', models.FloatField(validators=[django.core.validators.MinValueValidator(0)])),
                ('avaliacaoUser', models.IntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(0)])),
                ('avaliacaoCritico', models.IntegerField(validators=[django.core.validators.MaxValueValidator(10), django.core.validators.MinValueValidator(0)])),
            ],
            options={
                'db_table': 'expo',
            },
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200, unique=True)),
                ('descricao', models.CharField(max_length=400)),
                ('local', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'gallery',
            },
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.CharField(max_length=200, unique=True)),
                ('password', models.CharField(max_length=20)),
            ],
            options={
                'db_table': 'user',
            },
        ),
        migrations.CreateModel(
            name='GalleryExpo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expo', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='galleryexpo', to='back.expo')),
                ('gallery', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='galleryexpo', to='back.gallery')),
            ],
            options={
                'db_table': 'galleryexpo',
            },
        ),
        migrations.AddField(
            model_name='gallery',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='galleries', to='back.user', unique=True),
        ),
        migrations.CreateModel(
            name='FinalUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('gostos', models.CharField(max_length=400)),
                ('interesses', models.CharField(max_length=100)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='finaluser', to='back.user', unique=True)),
            ],
            options={
                'db_table': 'FinalUser',
            },
        ),
        migrations.AddField(
            model_name='expo',
            name='galeria',
            field=models.ManyToManyField(to='back.Gallery'),
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomeArtistico', models.CharField(max_length=200)),
                ('galeria', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='artists', to='back.gallery', unique=True)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='artists', to='back.user', unique=True)),
            ],
            options={
                'db_table': 'artist',
            },
        ),
        migrations.CreateModel(
            name='Art',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('serial_code', models.CharField(default='12345678901', max_length=11, unique=True)),
                ('corrente', models.CharField(max_length=200)),
                ('tipo', models.CharField(max_length=200)),
                ('descricao', models.CharField(max_length=400)),
                ('preco', models.FloatField(validators=[django.core.validators.MinValueValidator(0)])),
                ('artista', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='back.artist')),
            ],
            options={
                'db_table': 'art',
            },
        ),
    ]
