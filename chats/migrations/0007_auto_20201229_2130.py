# Generated by Django 3.1.1 on 2020-12-29 12:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chats', '0006_auto_20201229_2100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='file',
            name='file',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]
