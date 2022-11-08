from django.db import models

# Create your models here.
class Question(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    Q1 = models.CharField(max_length=50 )
    Q2 = models.CharField(max_length=50 )
    Q3 = models.CharField(max_length=50 )
    Q4 = models.CharField(max_length=50 )
    Q5 = models.CharField(max_length=50 )
    Q6 = models.CharField(max_length=50 )
    Q7 = models.CharField(max_length=50 )
    Q8 = models.CharField(max_length=50 )
    Q9 = models.CharField(max_length=50 )
    Q10 = models.CharField(max_length=50 )
    Q11 = models.CharField(max_length=50 )


    class Meta:
        ordering = ['-created']