# from django.shortcuts import render
# from rest_framework.generics import ListAPIView, RetrieveAPIView, UpdateAPIView
# from django.contrib.auth import get_user_model
# from django.shortcuts import get_object_or_404
# from .models import UserAccount
# from .serializers import UserCreateSerializer
# from rest_framework.views import APIView
# User = get_user_model()

# class UserDetailView(RetrieveAPIView):                         This is for getting id
#     queryset = User.objects.all()
#     serializer_class = UserCreateSerializer

#     def get_object(self):
#         email = self.kwargs.get('email')
#         return get_object_or_404(User, email=email)

