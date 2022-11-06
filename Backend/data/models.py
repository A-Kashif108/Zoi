from statistics import mode
from django.conf import settings
from django.db import models
from django.utils import timezone


class User(models.Model):
    username = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    hashedpwd = models.CharField(max_length=200, null=False)
    state = models.JSONField()


class Theme(models.Model):
    color = models.JSONField()
    imgurl = models.CharField(max_length=200, null=False)


class QnA(models.Model):
    username = models.CharField(max_length=200, primary_key=True, null=False, unique=True)
    question = models.TextField()
    answer = models.TextField()