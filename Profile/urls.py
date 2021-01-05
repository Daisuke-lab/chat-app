
from django.urls import path, include, re_path
from django.conf.urls import url
from .views import MyProfileView, get_profile, ProfileList, ImageDetail, ImageListCreate, get_images, ImageDetail
from .models import Profile
from .filters import ProfileFilter
from django_filters.views import object_filter
from django_filters.views import FilterView
urlpatterns = [
    path('list/', MyProfileView.as_view()),
    path('create/', MyProfileView.as_view()),
    path('update/<int:pk>/', MyProfileView.as_view()),
    # path('detail/<int:pk>/', MyProfileView.as_view()),
    path('delete/<int:pk>/', MyProfileView.as_view()),
    path('detail/<pk>/', get_profile),
    path('friend/<pk>/', MyProfileView.as_view()),
    path('image/', ImageListCreate.as_view()),
    path('image/<pk>/', ImageDetail.as_view()),
    url(r'^test/$', ProfileList.as_view())
]