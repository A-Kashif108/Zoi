from django.http import HttpResponse, HttpRequest
from rest_framework import viewsets
from .serializers import ThemeSerializer, UserSerializer, QnASerializer
from data.models import User, Theme, QnA
import requests

def index(request):
    return HttpResponse("Hello, world. You're being rickrolled in 3..2..1 Gotcha!!!")

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class ThemeViewSet(viewsets.ModelViewSet):
    queryset = Theme.objects.all()
    serializer_class = ThemeSerializer

class QnAViewSet(viewsets.ModelViewSet):
    queryset = QnA.objects.all()
    serializer_class = QnASerializer

def multiqna(request):
    data = request.body
    username = data.username
    count = data.count
    for i in range(count):
        question = data.qna[i].question
        answer = data.qna[i].answer
        body = {'username': username, 'question': question, 'answer': answer}
        requests.post('https://localhost:8000/api/qna', body=body)
        