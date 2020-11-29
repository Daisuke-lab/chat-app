from django.db import models
from django.contrib.auth import get_user_model
# Create your models here.
User = get_user_model()

#This is for making friends
class Contact(models.Model):
    #defining friends as 'self' allows you to add user to friend when either user1 or user2 add friend
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contact_user')
    friends = models.ManyToManyField('self', blank=True, related_name='friends')


    def __str__(self):
        return self.user.name


#This is for new Messages
class Message(models.Model):
    contact = models.ForeignKey(Contact, related_name='message', on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.contact.user.name


#This is for fetching messages
class Chat(models.Model):
    participants = models.ManyToManyField(Contact, related_name='chats')
    messages = models.ManyToManyField(Message, blank=True)


    def last_30_messages(self):
        return self.messages.order_by('-timestamp').all()[:30]


    def __str__(self):
        return "{}".format(self.pk)
        
