
from django.urls import path, include, re_path
from .views import MyProfileView, get_profile
urlpatterns = [
    path('list/', MyProfileView.as_view()),
    path('create/', MyProfileView.as_view()),
    path('update/<int:pk>/', MyProfileView.as_view()),
    # path('detail/<int:pk>/', MyProfileView.as_view()),
    path('delete/<int:pk>/', MyProfileView.as_view()),
    path('detail/<pk>/', get_profile),
    path('friend/<pk>/', MyProfileView.as_view())
]