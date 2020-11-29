
from django.shortcuts import render, get_object_or_404
from .models import *

def get_last_30_messages(ChatID):
    print('ChatID::', ChatID)
    # contact = Contact.objects.filter(user=1) # 1 could be given by reducer
    # contact2 = Contact.objects.filter(user=2) # 2 will be given by matching function
    # contact_list = []
    # chat2 = Chat.objects.filter(participants=(1,2))
    # print(chat2)
    # for i in chat2:
    #     print('i::',i.last_30_messages())
    # messages = get_object_or_404(Message, id=1)
    #print(messages)
    chat = get_object_or_404(Chat, id=ChatID)
    #chat = Chat.objects.filter(id=ChatID)
    return chat.messages.order_by('-timestamp').all()[:30]


def get_user_contact(name):
    user = get_object_or_404(User, name=name)
    return get_object_or_404(Contact, user=user)