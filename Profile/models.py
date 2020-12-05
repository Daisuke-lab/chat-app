from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()
# Create your models here.



class Profile(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE, related_name='profile')
    name = models.CharField(max_length=20, null=True)
    age = models.CharField(blank=True, null=True, max_length=3)
    gender = models.CharField(blank=True, max_length=10, null=True)
    native_lan = models.CharField(max_length=20)
    foreign_lan = models.CharField(max_length=20)
    image = models.ImageField(blank=True, null=True)
    location = models.CharField(blank=True, max_length=30, null=True)
    time_start = models.TimeField(blank=True, null=True)
    time_end = models.TimeField(blank=True, null=True)
    intro = models.TextField(blank=True, null=True)
    freeday = models.CharField(blank=True, max_length=10, null=True)

    def __str__(self):
        return self.name

class Swipe(models.Model):
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE, related_name='swipe')
    swiped = models.ManyToManyField(User, blank=True, related_name='swiped')
    liked = models.ManyToManyField(User, blank=True, related_name='liked')
    #'self'?

    def __str__(self):
        return self.user.name

