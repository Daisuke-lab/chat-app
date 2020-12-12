from rest_framework import permissions
import json
from rest_framework.generics import *
from chats.models import Chat, Contact
from .serializers import ChatSerializers, ContactSerializers
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from django.http import JsonResponse
import sys
sys.path.append('../')
from Profile.models import Profile 



User = get_user_model()
def get_user_contact(name):
    user = get_object_or_404(User, name=name)
    conatct = get_object_or_404(Contact, user=user)
    return conatct


@api_view(['POST'])
def create_chat(request):
    user1 = get_object_or_404(User, id=request.data['participants'][0])
    user2 = get_object_or_404(User, id=request.data['participants'][1])

    contact1 = get_object_or_404(Contact, user=user1)
    contact2 = get_object_or_404(Contact, user=user2)
    chat = Chat()
    chat.save()
    chat.participants.add(contact1)
    chat.participants.add(contact2)

    serializer = ChatSerializers(data=chat)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['GET'])
def get_chats(request, pk):
    if pk:
        print('pk::', pk)
        user = get_object_or_404(User, id=pk)
        contact = get_object_or_404(Contact, user=user)
        chatid_list = []
        for chat in contact.chats.values():
            chatid_list.append(chat['id'])
            print('chat::',chat)
        chats_list = []
        for chat_id in chatid_list:
            chat = get_object_or_404(Chat, id=chat_id)
            print('chat2::', chat.messages.order_by('-timestamp').all()[0].content)
            last_message = chat.messages.order_by('-timestamp').all()[0].content
            last_timestamp = chat.messages.order_by('-timestamp').all()[0].timestamp
            #chat.participants.all().values() is you and friend
            for user in chat.participants.all().values():
                friend_id = user['user_id']
                if friend_id != pk:
                    profile = get_object_or_404(Profile, user=friend_id)
                    print(json.dumps(str(profile.image)))
                    friend_object = {
                        'Chat_ID': chat_id,
                        'image': 'https://speakup-heroku.herokuapp.com/images/' + str(profile.image),
                        'profile_id': profile.id,
                        'name': profile.name,
                        'when_matched': chat.timestamp,
                        'last_message':last_message,
                        'last_timestamp': last_timestamp

                    }
                    chats_list.append(friend_object)

        print(chats_list)
        return JsonResponse({'chats_list':chats_list})
        


class ChatListView(ListAPIView):
    serializer_class = ChatSerializers
    permission_classes = [permissions.AllowAny]


    def get_queryset(self):
        queryset = Chat.objects.all()
        name = self.request.query_params.get('name')
        print('name::', name)
        if name:
            contact = get_user_contact(name)
            #chats is related name
            print('contact::', contact.chats)

            queryset = contact.chats.all()

        return queryset




class ChatDetailView(RetrieveAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializers
    permission_classes = [permissions.AllowAny]

class ChatUpdateView(UpdateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializers
    permission_classes = [permissions.IsAuthenticated]


class ChatCreateView(CreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializers
    permission_classes = [permissions.AllowAny]


class ChatDeleteView(DestroyAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializers
    permission_classes = [permissions.IsAuthenticated]


# update create, destroy permissons.IsAuthenticated


class ContactListView(ListAPIView):
    serializer_class = ContactSerializers
    permission_classes = [permissions.IsAuthenticated]


    def get_queryset(self):
        queryset = Contact.objects.all()
        name = self.request.query_params.get('name')
        print('name::', name)
        if name:
            contact = get_user_contact(name)
            #chats is related name
            print('contact::', contact.chats)

            queryset = contact.chats.all()

        return queryset




class ContactDetailView(RetrieveAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    permission_classes = [permissions.AllowAny]

class ContactUpdateView(UpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    permission_classes = [permissions.IsAuthenticated]


class ContactCreateView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    permission_classes = [permissions.AllowAny]


class ContactDeleteView(DestroyAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    permission_classes = [permissions.IsAuthenticated]



@api_view(['GET'])
def get_contact(request, pk):
    if pk:
        user = get_object_or_404(User, pk=pk)
        contact = get_object_or_404(Contact, user=user)
        serializer = ContactSerializers(contact)

        return Response(serializer.data)

@api_view(['PUT'])
def add_friend(request, pk):
    if id:
        user = get_object_or_404(User, id=pk)
        contact = get_object_or_404(Contact, user=user)
        print(request.data)
        friend = get_object_or_404(User, id=request.data['friend'])
        friend_contact = get_object_or_404(Contact, user=friend)
        print(friend_contact)
        contact.friends.add(friend_contact)

        serializer = ContactSerializers(data=contact)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)