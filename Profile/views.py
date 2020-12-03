from django.shortcuts import render
from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.mixins import RetrieveModelMixin, CreateModelMixin, UpdateModelMixin, DestroyModelMixin, ListModelMixin
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .serializers import ProfileSerializer
from .models import Profile
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes

User = get_user_model()

@api_view(['GET'])
def get_profile(request, pk):
    if pk:
        user = get_object_or_404(User, pk=pk)
        profile = get_object_or_404(Profile, user=user)
        print('profile',profile.image)
        serializer =ProfileSerializer(profile)

        return Response(serializer.data)

        
class MyProfileView(GenericAPIView, RetrieveModelMixin,
CreateModelMixin, UpdateModelMixin, DestroyModelMixin, ListModelMixin):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def post(self, request):
        return  self.create(request)
        
    def get(self, request, pk=None):
        if pk:
            return self.retrieve(request,pk)
        else:
            return self.list(request)

    def put(self, request, pk=None):
        return self.update(request, pk)

    def delete(self, request, pk=None):
        return self.destroy(request, pk)











