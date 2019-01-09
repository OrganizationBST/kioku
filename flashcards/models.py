import datetime

from django.db import models

# Create your models here.

class Flashcard(models.Model):
    deck_name = models.CharField(max_length=200)
    up_date = models.DateTimeField('date uploaded')
    def __str__(self):
        return self.deck_name


class Admin(models.Model):
    admin_name = models.CharField(max_length=200)
    def __str__(self):
        return self.admin_name

class User(models.Model):
    user_name = models.CharField(max_length=200)
    def __str__(self):
        return self.user_name