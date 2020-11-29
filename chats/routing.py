from django.urls import re_path, path

from . import consumers

websocket_urlpatterns = [
    #"/$" implys you have to end path with "/"
    #"\w" implys any number


    re_path(r'^ws/chat/(?P<room_name>[^/]+)/$', consumers.ChatConsumer),
]