# Generated by Django 4.2.3 on 2023-08-02 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ereports', '0002_alter_ereportnovedad_e_report'),
    ]

    operations = [
        migrations.AlterField(
            model_name='novedadereport',
            name='boton',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='novedadereport',
            name='content_type',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='novedadereport',
            name='link',
            field=models.URLField(blank=True),
        ),
        migrations.AlterField(
            model_name='novedadereport',
            name='sumario',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='novedadereport',
            name='titulo',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
