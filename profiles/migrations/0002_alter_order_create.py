# Generated by Django 3.2.9 on 2021-12-26 03:19

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='create',
            field=models.DateTimeField(default=datetime.datetime(2021, 12, 26, 10, 19, 0, 456278)),
        ),
    ]
