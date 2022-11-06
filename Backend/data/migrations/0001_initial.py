# Generated by Django 3.2.15 on 2022-10-12 18:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Theme',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.JSONField()),
                ('imgurl', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('username', models.CharField(max_length=200, primary_key=True, serialize=False, unique=True)),
                ('hashedpwd', models.CharField(max_length=200)),
                ('state', models.JSONField()),
            ],
        ),
    ]
