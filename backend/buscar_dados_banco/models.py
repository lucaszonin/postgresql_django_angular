from django.db import models

# Create your models here.
class Employee(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    role_id = models.IntegerField()
    birthday = models.DateField()
    cod_badge = models.IntegerField()


class Roles(models.Model):
    role_name = models.CharField(max_length=30)
    description = models.TextField()

