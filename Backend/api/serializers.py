from data.models import User, Theme, QnA
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'hashedpwd', 'state']


class ThemeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Theme
        fields = ['url', 'color', 'imgurl']


class QnASerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = QnA
        fields = ['url', 'username', 'question', 'answer']