# Generated by Django 3.2.6 on 2021-08-20 19:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('back', '0004_auto_20210820_1541'),
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
                ('precoEntrada', models.FloatField()),
                ('avaliacaoUser', models.IntegerField()),
                ('avaliacaoCritico', models.IntegerField()),
            ],
            options={
                'db_table': 'expo',
            },
        ),
        migrations.CreateModel(
            name='Gallery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=200)),
                ('descricao', models.CharField(max_length=400)),
                ('local', models.CharField(max_length=100)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='galleries', to='back.user')),
            ],
            options={
                'db_table': 'gallery',
            },
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nomeArtistico', models.CharField(max_length=200)),
                ('galeria', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='artists', to='back.gallery')),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='artists', to='back.user')),
            ],
            options={
                'db_table': 'artist',
            },
        ),
    ]
