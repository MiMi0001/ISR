# Generated by Django 4.2.1 on 2023-05-10 17:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0004_alter_productcategory_description'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Vat',
            new_name='Tax',
        ),
    ]