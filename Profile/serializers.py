from rest_framework import serializers
from .models import Profile
from django.db.models import F, Value


class ProfileSerializer(serializers.ModelSerializer):
    #slug_field is related_name


    class Meta:
        model = Profile
        fields = ['id','user', 'name', 'age', 'gender', 'native_lan', 'foreign_lan', 'image', 'location', 'time_start', 'time_end',
        'intro', 'freeday']
