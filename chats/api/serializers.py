from rest_framework import serializers

from chats.models import Chat, Contact
# StringRelatedField
class ContactSerializers(serializers.ModelSerializer):
    # def to_internal_value(self, value):
    #     return value

    class Meta:
        model = Contact
        fields = '__all__'


class ChatSerializers(serializers.ModelSerializer):
    # participants = ContactSerializers
    class Meta:
        model = Chat
        fields = ('id', 'messages', 'participants')
